# Playwright E-commerce Automation Framework

A robust UI automation testing framework built using **Playwright + TypeScript** for validating core e-commerce workflows.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)
- Playwright HTML Reports

---

## Project Overview

This automation framework validates major e-commerce functionalities including:

- User authentication
- Product sorting
- Cart functionality
- Checkout validations
- End-to-end order placement
- Menu validations
- Footer social media link validations

The framework follows clean automation practices with modular test organization and scalable structure.

---

## Test Coverage

### Login Module
- Valid user login
- Invalid user login

### Cart Module
- Add to cart validation
- Remove from cart validation
- Continue shopping validation
- Checkout button validation
- Remove item from cart page

### Checkout Module
- Missing first name validation
- Missing last name validation
- Missing zip code validation

### Product Sorting Module
- Sort by name (A-Z)
- Sort by name (Z-A)
- Sort by price (Low to High)
- Sort by price (High to Low)

### Navigation/Menu Module
- Validate menu options
- About link validation
- Logout validation
- Reset app state validation

### Footer Validation
- Twitter link validation
- Facebook link validation
- LinkedIn link validation

### End-to-End Flow
- Successful product purchase flow

---

## Framework Structure

```bash
playwright-ecommerce-automation-framework/
│
├── .github/workflows/
│   └── playwright.yml
│
├── pages/
├── tests/
├── utils/
├── playwright-report/
├── test-results/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/your-username/playwright-ecommerce-automation-framework.git
```

Navigate to project:

```bash
cd playwright-ecommerce-automation-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/loginUser.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run with UI mode:

```bash
npx playwright test --ui
```

---

## Reports

Generate report:

```bash
npx playwright show-report
```

Playwright HTML reports are automatically generated after execution.

---

## CI/CD Integration

GitHub Actions pipeline is configured for automated test execution on:

- Push to main branch
- Pull requests

Pipeline includes:

- Dependency installation
- Browser setup
- Test execution

---

## Future Enhancements

- API automation integration

---

## Author

Abhishek Midha

QA Automation Engineer | Playwright | Selenium | Appium | TypeScript | Java
