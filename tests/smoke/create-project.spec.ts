import { faker } from '@faker-js/faker';
import { API_URL, PROJECTS_ENDPOINT } from '../../src/api/config/api.config';
import { getRequest } from '../../src/api/requests/get.request';
import { TODOIST_AUTH_HEADERS } from '../../src/api/requests/todoist.auth.headers';
import { expect, test } from '../../src/fixtures/po.fixture';
import { CreateProjectModel } from '../../src/models/create-project.model';

test('should create a new project', { tag: ['@smoke', '@smoke001'] }, async ({ homePage }) => {
  // Arrange
  const project: CreateProjectModel = {
    name: faker.lorem.words(2),
    color: 'Intensywny czerwony',
  };

  // Act
  await homePage.open();
  await homePage.leftPanel.addNewProject(project);

  // API check
  await getRequest(`${API_URL}/${PROJECTS_ENDPOINT}`, TODOIST_AUTH_HEADERS);

  // Assert
  await expect(homePage.leftPanel.getProjectByName(project.name)).toBeVisible();
});
