/* eslint-disable no-console */
import { API_URL, PROJECTS_ENDPOINT } from '../../config/api.config';
import { parseResponse } from '../../helpers/parse.response.helper';
import { ProjectResponse } from '../../models/project.model';
import { getRequest } from '../../requests/get.request';
import { TODOIST_AUTH_HEADERS } from '../../requests/todoist.auth.headers';

export const getProjectIdByNameAPISteps = async (projectName: string): Promise<string | null> => {
  const timeout = 5000;
  const interval = 1000;
  const start = Date.now();
  let projectId: string | null = null;

  while (Date.now() - start < timeout) {
    console.log(`Checking for project "${projectName}"...`);

    const response = await getRequest(`${API_URL}/${PROJECTS_ENDPOINT}`, TODOIST_AUTH_HEADERS);
    if (response.ok()) {
      const projects = await parseResponse<ProjectResponse[]>(response);
      const project = projects.find((p) => p.name === projectName);
      if (project) {
        projectId = project.id;
        break;
      }
    }
    await new Promise((res) => setTimeout(res, interval));
  }

  return projectId;
};
