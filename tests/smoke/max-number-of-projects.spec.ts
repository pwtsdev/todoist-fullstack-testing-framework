import { ProjectColor } from '../../src/api/models/project.color.enum';
import { ProjectPayload } from '../../src/api/models/project.model';
import { createProjectApiStep } from '../../src/api/steps/projects/create.project.api.step';
import { expect, test } from '../../src/fixtures/po.fixture';

test.describe('Max number of projects on free plan', () => {
  test.beforeEach(async () => {
    // Arrange
    const projectPayloadData: ProjectPayload[] = [
      { name: 'Project One', color: ProjectColor.BLUE },
      { name: 'Project Two', color: ProjectColor.GRAPE },
      { name: 'Project Three', color: ProjectColor.LAVENDER },
      { name: 'Project Four', color: ProjectColor.TEAL },
      { name: 'Project Five', color: ProjectColor.SALMON },
    ];

    for (const project of projectPayloadData) {
      await createProjectApiStep(project);
    }
  });

  test('create project over limit', { tag: ['@smoke', '@smoke002'] }, async ({ homePage }) => {
    const expectedHeader = 'Chcesz mieć do dyspozycji więcej projektów?';

    // Act
    await homePage.open();
    await homePage.leftPanel.openProjectsMenu();

    // Assert
    const premiumModal = homePage.leftPanel.buyPremiumModal;
    await expect(premiumModal.modal()).toBeVisible();
    await expect(premiumModal.header()).toHaveText(expectedHeader);
  });
});
