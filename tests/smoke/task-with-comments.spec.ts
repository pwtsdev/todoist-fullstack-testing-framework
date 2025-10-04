import { ProjectColor } from '../../src/api/models/project.color.enum';
import { ProjectPayload } from '../../src/api/models/project.model';
import { createProjectApiStep } from '../../src/api/steps/projects/create.project.api.step';
import { expect, test } from '../../src/fixtures/po.fixture';

test.describe('Add task with comments', () => {
  test('task with comments - image and voice', { tag: ['@smoke', '@smoke004'] }, async ({ homePage }) => {
    // Arrange
    const project: ProjectPayload = { name: 'ATTACHMENT', color: ProjectColor.BERRY_RED };

    // Act
    await createProjectApiStep(project);

    await test.step('add task with comment and attachment', async () => {
      const taskName = 'Task with comments';
      const description = 'This is a description of the task';
      const comment = 'This is a comment with attachment';

      await homePage.open();
      await homePage.leftPanel.openProject(project.name);
      await expect(homePage.projectPanel.projectHeader()).toHaveText(project.name);

      await homePage.projectPanel.addTask(taskName, description);
      await expect(homePage.projectPanel.getTaskByName(taskName)).toBeVisible();

      await homePage.projectPanel.openTask(taskName);

      await homePage.projectPanel.addCommentWithAttachments(comment);
    });

    // Assert
    await test.step('verify number of comments', async () => {
      expect(await homePage.projectPanel.getNumberOfComments()).toBe('2');
    });
  });
});
