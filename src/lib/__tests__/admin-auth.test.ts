import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  getAdminPassword,
  hashPassword,
  verifyPassword,
  createSessionId,
  createSessionCookie,
  clearSessionCookie,
  createCsrfToken,
  createCsrfCookie,
  getSessionId,
  isAuthenticated,
  isRateLimited,
  recordLoginAttempt,
  validateCsrfToken,
} from '../admin-auth';

const ORIGINAL_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

beforeEach(() => {
  process.env.ADMIN_PASSWORD = 'test-password';
});

afterEach(() => {
  if (ORIGINAL_ADMIN_PASSWORD === undefined) {
    delete process.env.ADMIN_PASSWORD;
  } else {
    process.env.ADMIN_PASSWORD = ORIGINAL_ADMIN_PASSWORD;
  }
});

describe('admin-auth', () => {
  describe('when getAdminPassword is called', () => {
    it('should return ADMIN_PASSWORD env variable', () => {
      expect(getAdminPassword()).toBe('test-password');
    });
  });

  describe('when hashPassword is called', () => {
    it('should return a hash string', async () => {
      const hashed = await hashPassword('test-password');
      expect(typeof hashed).toBe('string');
      expect(hashed.length).toBeGreaterThan(0);
    });
  });

  describe('when verifyPassword is called', () => {
    it('should return true for correct password', async () => {
      const valid = await verifyPassword('test-password');
      expect(valid).toBe(true);
    });

    it('should return false for incorrect password', async () => {
      const valid = await verifyPassword('wrong-password');
      expect(valid).toBe(false);
    });
  });

  describe('when createSessionId is called', () => {
    it('should return a UUID string', () => {
      const id = createSessionId();
      expect(id).toMatch(/^[0-9a-f-]{36}$/);
    });
  });

  describe('when createSessionCookie is called', () => {
    it('should set HttpOnly, Secure, SameSite=Strict, Path=/, Max-Age', () => {
      const cookie = createSessionCookie('abc-123');
      expect(cookie).toContain('admin_session=abc-123');
      expect(cookie).toContain('Path=/');
      expect(cookie).toContain('HttpOnly');
      expect(cookie).toContain('Secure');
      expect(cookie).toContain('SameSite=Strict');
      expect(cookie).toContain('Max-Age=');
    });
  });

  describe('when clearSessionCookie is called', () => {
    it('should set Max-Age=0', () => {
      const cookie = clearSessionCookie();
      expect(cookie).toContain('admin_session=');
      expect(cookie).toContain('Max-Age=0');
    });
  });

  describe('when createCsrfCookie is called', () => {
    it('should set Secure and SameSite but not HttpOnly', () => {
      const cookie = createCsrfCookie('token-value');
      expect(cookie).toContain('csrf_token=token-value');
      expect(cookie).toContain('Secure');
      expect(cookie).toContain('SameSite=Strict');
      expect(cookie).not.toContain('HttpOnly');
    });
  });

  describe('when getSessionId is called', () => {
    it('should return the session ID from cookie header', () => {
      const request = new Request('http://localhost', {
        headers: { cookie: 'admin_session=my-session-id' },
      });
      expect(getSessionId(request)).toBe('my-session-id');
    });

    it('should return null without cookie', () => {
      const request = new Request('http://localhost');
      expect(getSessionId(request)).toBeNull();
    });
  });

  describe('when isAuthenticated is called', () => {
    it('should return true for valid session ID', async () => {
      const request = new Request('http://localhost', {
        headers: { cookie: 'admin_session=550e8400-e29b-41d4-a716-446655440000' },
      });
      expect(await isAuthenticated(request)).toBe(true);
    });

    it('should return false without cookie', async () => {
      const request = new Request('http://localhost');
      expect(await isAuthenticated(request)).toBe(false);
    });
  });

  describe('when rate limiting is used', () => {
    it('should allow requests under limit', () => {
      const request = new Request('http://localhost');
      expect(isRateLimited(request)).toBe(false);
    });

    it('should block after 5 failed attempts', () => {
      const request = new Request('http://localhost', {
        headers: { 'x-forwarded-for': '10.0.0.1' },
      });

      recordLoginAttempt(request, false);
      recordLoginAttempt(request, false);
      recordLoginAttempt(request, false);
      recordLoginAttempt(request, false);

      expect(isRateLimited(request)).toBe(false);

      recordLoginAttempt(request, false);
      expect(isRateLimited(request)).toBe(true);
    });
  });

  describe('when createCsrfToken is called', () => {
    it('should return a hash string', () => {
      const token = createCsrfToken('session-123');
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(0);
    });

    it('should produce different tokens for different session IDs', () => {
      const token1 = createCsrfToken('session-a');
      const token2 = createCsrfToken('session-b');
      expect(token1).not.toBe(token2);
    });
  });

  describe('when validateCsrfToken is called', () => {
    it('should return true for valid token', async () => {
      const session = '550e8400-e29b-41d4-a716-446655440000';
      const token = createCsrfToken(session);
      const request = new Request('http://localhost', {
        headers: {
          cookie: `admin_session=${session}; csrf_token=${token}`,
          'x-csrf-token': token,
        },
      });
      expect(await validateCsrfToken(request)).toBe(true);
    });

    it('should return false for invalid token', async () => {
      const request = new Request('http://localhost', {
        headers: {
          cookie: 'admin_session=550e8400-e29b-41d4-a716-446655440000',
          'x-csrf-token': 'invalid-token',
        },
      });
      expect(await validateCsrfToken(request)).toBe(false);
    });
  });
});
