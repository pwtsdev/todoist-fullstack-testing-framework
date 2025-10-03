/* eslint-disable no-console */
import { expect } from 'playwright/test';
import { API_URL, PROJECTS_ENDPOINT } from '../../config/api.config';
import { parseResponse } from '../../helpers/parse.response.helper';
import { ProjectResponse } from '../../models/project.model';
import { getRequest } from '../../requests/get.request';
import { TODOIST_AUTH_HEADERS } from '../../requests/todoist.auth.headers';

export const getProjectIdByNameAPIStep = async (projectName: string): Promise<string> => {
  let projectId: string | null = null;

  await expect
    .poll(
      async () => {
        console.log(`Checking for project "${projectName}"...`);
        const response = await getRequest(`${API_URL}/${PROJECTS_ENDPOINT}`, TODOIST_AUTH_HEADERS);

        if (!response.ok()) return null;

        const projects = await parseResponse<ProjectResponse[]>(response);
        const project = projects.find((p) => p.name.trim() === projectName.trim());
        projectId = project ? project.id : null;

        return projectId;
      },
      {
        message: `Project "${projectName}" did not appear in time`,
        timeout: 5000,
      },
    )
    .not.toBeNull();

  return projectId as unknown as string;
};
