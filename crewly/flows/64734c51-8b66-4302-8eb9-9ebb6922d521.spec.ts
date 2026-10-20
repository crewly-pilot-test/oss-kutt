import { test, expect } from '@playwright/test';

const base = process.env.CREWLY_BASE_URL!;

test('ping endpoint returns pong', async ({ request }) => {
  const res = await request.get(base + '/api/v2/ping');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.pong).toBe(true);
  const health = await request.get(base + '/api/v2/health');
  expect(health.status()).toBe(200);
});
