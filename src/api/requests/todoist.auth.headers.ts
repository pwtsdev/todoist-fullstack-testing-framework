/* eslint-disable @typescript-eslint/naming-convention */
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error('API_KEY environment variable is not defined');
}

export const TODOIST_AUTH_HEADERS = {
  Authorization: `Bearer ${API_KEY}`,
};
