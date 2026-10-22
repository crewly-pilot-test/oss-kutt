import { test, expect } from '@playwright/test';

const base = process.env.CREWLY_BASE_URL!;

test('health check returns JSON status and version', async ({ request }) => {
  const res = await request.get(base + '/api/v2/health');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('application/json');
  const body = await res.json();
  expect(body.status).toBe('ok');
  expect(body.version).toMatch(/^\d+\.\d+\.\d+$/);
});