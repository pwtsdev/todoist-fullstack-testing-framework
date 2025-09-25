# Todoist Fullstack Testing Framework

Welcome to the **Todoist Fullstack Testing Framework** repository – built by [@bkita](https://github.com/bkita).

This project demonstrates comprehensive testing of the Todoist application using **Playwright** with **TypeScript**, covering both UI and API testing scenarios.

This repo contains smoke tests, API tests, and advanced test automation patterns for testing a real-world application with proper setup hooks, fixtures, and CI/CD integration.

## What This Project Covers

This project demonstrates **fullstack testing** with a focus on real-world scenarios:

- **UI Testing** with Playwright (project creation, task management, search functionality)
- **API Testing** for backend validation and test data setup
- **Advanced Test Patterns** including fixtures, page objects, and global hooks
- **CI/CD Integration** with GitHub Actions
- **Environment Configuration** for local and cloud execution

You'll see practical examples of testing patterns like test data cleanup via API, authentication handling, and comprehensive smoke test coverage.

By exploring this project, you'll understand how to **build maintainable and reliable test suites** for modern web applications.

---

## Prerequisites

To get started, you'll need:

- [Node.js](https://nodejs.org) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)
- A Todoist account for testing

---

## Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/pwtsdev/todoist-fullstack-testing-framework.git
   cd todoist-fullstack-testing-framework
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with your credentials:

   ```env
   USER_EMAIL=your-email@example.com
   USER_PASSWORD=your-password
   API_KEY=your-api-key
   LOGGER=false
   ```

## Running Tests

### Local Execution

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run tests with UI mode
npm run test:ui

# Skip linting and run tests directly
npm run test:nolint
```

### Lint and Type Check

```bash
# Run TypeScript check and ESLint
npm run pretest
```

### View Reports

```bash
# Show test report
npm run show-report
```

---

## Project Stack

This project is configured with:

- **Playwright** (cross-browser testing)
- **TypeScript** (strict mode, ES modules)
- **ESLint** (typescript-eslint + Playwright plugin)
- **Prettier** (code formatting)
- **Husky** (Git hooks)
- **lint-staged** (staged files linting)
- **tslog** (structured logging)
- **dotenv** (environment variables)

Additional tools:

- **GitHub Actions** (CI/CD pipeline)
- **Faker.js** (test data generation)
- **Chalk** (colored terminal output)

## Project Structure

```
src/
  api/
    config/           # API configuration
    models/           # Data models and enums
    requests/         # HTTP request helpers
    steps/           # API test steps
  fixtures/
    po.fixture.ts    # Page object fixture with global hooks
  helpers/
    api/             # API helper functions
  ui/
    components/      # UI components
    modals/          # Modal page objects
    pages/           # Page object models
tests/
  api/               # API test specifications
  requirements/      # Test requirement documentation
  setup/             # Setup and teardown scripts
  smoke/             # Smoke test specifications
.github/
  workflows/
    playwright.yml   # CI/CD pipeline configuration
```

---

## Key Features

### 🔧 **Global Test Hooks**

Automatic test data cleanup before and after each test using API calls.

### 🎭 **Page Object Pattern**

Structured UI automation with maintainable page objects and component abstraction.

### 🚀 **API Integration**

Hybrid testing approach combining UI validation with API-driven test data management.

### 🔄 **CI/CD Ready**

GitHub Actions workflow with secret management and artifact upload.

### 📊 **Comprehensive Reporting**

Rich test reports with traces, screenshots, and detailed execution logs.

### 🛡️ **Code Quality**

Pre-commit hooks ensuring code quality with ESLint, Prettier, and TypeScript checks.

---

## Test Scenarios

- **Project Management**: Create, search, and manage projects
- **Task Operations**: Add tasks with comments, images, and voice notes
- **Limit Testing**: Verify system limits and error handling
- **Authentication**: Login session management and persistence

---

## License

ISC License.

---

## Why Fullstack Testing?

Modern applications require comprehensive testing strategies. This project shows you how to:

- **Test the full user journey** from UI to API
- **Optimize test execution** with smart data management
- **Build maintainable test suites** that scale with your application
- **Integrate testing** into your development workflow

Ready to level up your testing game? Let's automate! 🎯

Created with 🧉 by [@bkita](https://github.com/bkita)
