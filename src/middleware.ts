import { defineMiddleware } from 'astro:middleware';
import {
  authenticatedSessionCookie,
  clearCsrfCookie,
  clearSessionCookie,
  isAuthenticated,
  isRateLimited,
  recordLoginAttempt,
  validateCsrfToken,
  verifyPassword,
} from './lib/admin-auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const request = context.request;
  const url = new URL(request.url);
  const isSecure = url.protocol === 'https:';

  if (url.pathname.replace(/\/$/, '') === '/admin/logout') {
    const headers = new Headers();
    headers.set('Location', '/admin/login');
    headers.append('Set-Cookie', clearSessionCookie(isSecure));
    headers.append('Set-Cookie', clearCsrfCookie(isSecure));
    return new Response(null, { status: 302, headers });
  }

  if (url.pathname.replace(/\/$/, '') === '/admin/login' && request.method === 'POST') {
    if (isRateLimited(request)) {
      return jsonResponse({ error: 'Too many login attempts. Try again in 1 minute.' }, 429);
    }

    const formData = await request.clone().formData();
    const password = String(formData.get('password') || '');
    const valid = await verifyPassword(password);
    recordLoginAttempt(request, valid);

    if (!valid) {
      return jsonResponse({ error: 'Invalid password' }, 401);
    }

    const cookies = authenticatedSessionCookie(request, isSecure);
    const headers = new Headers();
    headers.set('Location', '/admin/');
    for (const cookie of cookies) {
      headers.append('Set-Cookie', cookie);
    }
    return new Response(null, { status: 302, headers });
  }

  if (url.pathname.replace(/\/$/, '') === '/admin/login') {
    if (!url.pathname.endsWith('/')) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/admin/login/' },
      });
    }
    return next();
  }

  if (url.pathname.startsWith('/admin/api/')) {
    if (!(await isAuthenticated(request))) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    if (['POST', 'PUT', 'DELETE'].includes(request.method) && !(await validateCsrfToken(request))) {
      return jsonResponse({ error: 'Invalid CSRF token' }, 403);
    }

    return next();
  }

  if (url.pathname.startsWith('/admin/')) {
    if (!(await isAuthenticated(request))) {
      const loginUrl = `/admin/login${url.pathname !== '/admin/' ? `?returnUrl=${encodeURIComponent(url.pathname)}` : ''}`;
      return new Response(null, {
        status: 302,
        headers: { Location: loginUrl },
      });
    }

    if (['POST', 'PUT', 'DELETE'].includes(request.method) && !(await validateCsrfToken(request))) {
      return jsonResponse({ error: 'Invalid CSRF token' }, 403);
    }
  }

  return next();
});

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json',
    },
  });
}
