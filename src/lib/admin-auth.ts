import { createHash, randomUUID, timingSafeEqual } from 'node:crypto';

const SESSION_COOKIE = 'admin_session';
const CSRF_COOKIE = 'csrf_token';
const SESSION_SECONDS = 60 * 60 * 24 * 7;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const loginAttempts = new Map<string, number[]>();

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'changeme';
}

export async function hashPassword(password: string): Promise<string> {
  return sha256(`${getAdminPassword()}::${password}`);
}

export async function verifyPassword(password: string): Promise<boolean> {
  const expected = await hashPassword(getAdminPassword());
  const actual = await hashPassword(password);

  return safeEqual(expected, actual);
}

export function createSessionId(): string {
  return randomUUID();
}

export function createSessionCookie(sessionId: string, secure = true): string {
  return `${SESSION_COOKIE}=${sessionId}; Path=/; Max-Age=${SESSION_SECONDS}; HttpOnly;${secure ? ' Secure;' : ''} SameSite=Strict`;
}

export function clearSessionCookie(secure = true): string {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly;${secure ? ' Secure;' : ''} SameSite=Strict`;
}

export function createCsrfCookie(token: string, secure = true): string {
  return `${CSRF_COOKIE}=${token}; Path=/; Max-Age=${SESSION_SECONDS};${secure ? ' Secure;' : ''} SameSite=Strict`;
}

export function clearCsrfCookie(secure = true): string {
  return `${CSRF_COOKIE}=; Path=/; Max-Age=0;${secure ? ' Secure;' : ''} SameSite=Strict`;
}

export function getSessionId(request: Request): string | null {
  const cookies = parseCookies(request.headers.get('cookie') || '');
  return cookies.get(SESSION_COOKIE) || null;
}

export function getCsrfTokenFromRequest(request: Request): string | null {
  return request.headers.get('x-csrf-token') || parseCookies(request.headers.get('cookie') || '').get(CSRF_COOKIE);
}

export async function isAuthenticated(request: Request): Promise<boolean> {
  const sessionId = getSessionId(request);
  return Boolean(sessionId && /^[0-9a-f-]{36}$/.test(sessionId));
}

export function isRateLimited(request: Request): boolean {
  const attempts = getAttemptsForRequest(request);
  return attempts.length >= RATE_LIMIT_MAX_ATTEMPTS;
}

export function recordLoginAttempt(request: Request, success: boolean): void {
  const key = getRequestKey(request);
  const now = Date.now();
  const attempts = loginAttempts.get(key) || [];
  const recentAttempts = attempts.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (success) {
    loginAttempts.delete(key);
    return;
  }

  recentAttempts.push(now);
  loginAttempts.set(key, recentAttempts);
}

export function createCsrfToken(sessionId: string): string {
  const secret = sha256Sync(`${getAdminPassword()}::csrf`);
  return sha256Sync(`${secret}:${sessionId}`);
}

export async function validateCsrfToken(request: Request): Promise<boolean> {
  const sessionId = getSessionId(request);

  if (!sessionId) {
    return false;
  }

  const token = getCsrfTokenFromRequest(request);

  if (!token) {
    return false;
  }

  const expected = createCsrfToken(sessionId);
  return safeEqual(expected, token);
}

export function authenticatedSessionCookie(request: Request, secure = true): string[] {
  const sessionId = createSessionId();

  return [
    createSessionCookie(sessionId, secure),
    createCsrfCookie(createCsrfToken(sessionId), secure),
  ];
}

function parseCookies(header: string): Map<string, string> {
  return new Map(
    header
      .split(';')
      .map((cookie) => cookie.trim())
      .filter(Boolean)
      .map((cookie) => {
        const [name, ...rest] = cookie.split('=');
        return [name, rest.join('=')];
      })
  );
}

function getAttemptsForRequest(request: Request): number[] {
  const key = getRequestKey(request);
  const now = Date.now();
  const attempts = loginAttempts.get(key) || [];
  const recentAttempts = attempts.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  loginAttempts.set(key, recentAttempts);
  return recentAttempts;
}

function getRequestKey(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwardedFor || request.headers.get('cf-connecting-ip') || 'unknown';
}

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function sha256Sync(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

function safeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}
