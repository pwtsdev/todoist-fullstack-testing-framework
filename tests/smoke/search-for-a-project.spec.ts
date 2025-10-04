import { ProjectColor } from '../../src/api/models/project.color.enum';
import { ProjectPayload } from '../../src/api/models/project.model';
import { createProjectApiStep } from '../../src/api/steps/projects/create.project.api.step';
import { expect, test } from '../../src/fixtures/po.fixture';

test.describe('Search', () => {
  test.beforeEach(async () => {
    // Arrange
    const projectPayloadData: ProjectPayload[] = [
      { name: 'WORK', color: ProjectColor.BLUE },
      { name: 'BILLS', color: ProjectColor.GRAPE },
      { name: 'HOLIDAYS', color: ProjectColor.LAVENDER },
    ];

    for (const project of projectPayloadData) {
      await createProjectApiStep(project);
    }
  });

  test('find and existing project', { tag: ['@smoke', '@smoke003'] }, async ({ homePage }) => {
    const searchProject = 'WORK';

    await test.step('find and existing project', async () => {
      await homePage.open();
      await homePage.leftPanel.searchForAProject(searchProject);
    });

    // Assert
    await test.step('verify project header', async () => {
      await expect(homePage.projectPanel.projectHeader()).toBeVisible();
      await expect(homePage.projectPanel.projectHeader()).toHaveText(searchProject);
    });
  });
});
