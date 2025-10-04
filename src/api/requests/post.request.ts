import { APIResponse, request } from '@playwright/test';
import { requestLogger, responseLogger } from '../helpers/logger.helper';
import { APIPayload } from '../models/payload.model';

export const postRequest = async (
  endpoint: string,
  payload: APIPayload,
  headers: Record<string, string> = {},
): Promise<APIResponse> => {
  const api = await request.newContext();
  requestLogger('POST', endpoint, payload, headers);

  const response = await api.post(endpoint, { data: payload, headers: headers });
  await responseLogger(response);

  return response;
};
