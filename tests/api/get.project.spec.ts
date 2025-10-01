import test, { expect } from 'playwright/test';
import { API_URL, EXISTING_PROJECT_ID, PROJECTS_ENDPOINT } from '../../src/api/config/api.config';
import { getRequest } from '../../src/api/requests/get.request';
import { TODOIST_AUTH_HEADERS } from '../../src/api/requests/todoist.auth.headers';

const headers = TODOIST_AUTH_HEADERS;

test.describe('API /projects', () => {
  test.skip('GET /projects returns 200', async () => {
    const response = await getRequest(`${API_URL}/${PROJECTS_ENDPOINT}`, headers);
    expect(response.status()).toBe(200);
  });

  test.skip('GET /projects/:id returns 200', async () => {
    const response = await getRequest(`${API_URL}/${PROJECTS_ENDPOINT}/${EXISTING_PROJECT_ID}`, headers);
    expect(response.status()).toBe(200);
  });
});
