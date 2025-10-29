# 🤝 Contributing to Workly

Thank you for considering contributing to Workly! This document provides guidelines and instructions for contributing.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive.

### Our Standards

- **Be respectful** of differing viewpoints
- **Accept constructive criticism** gracefully
- **Focus on what is best** for the community
- **Show empathy** towards other community members

---

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/workly.git
cd workly
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/workly.git
```

### 4. Install Dependencies

```bash
pnpm install
```

### 5. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

---

## 💻 Development Process

### Running the Project

```bash
# All apps
pnpm dev

# Individual app
pnpm dev:shell
pnpm dev:task
pnpm dev:announce
```

### Before Committing

1. **Lint your code**
```bash
pnpm lint
```

2. **Type check**
```bash
pnpm type-check
```

3. **Format code**
```bash
pnpm format
```

4. **Test (when available)**
```bash
pnpm test
```

---

## 📏 Coding Standards

### TypeScript

- **Use TypeScript** for all new files
- **Define types** - avoid `any`
- **Export types** from shared-types package

```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
}

// ❌ Bad
const user: any = { ... };
```

### React Components

- **Use functional components** with hooks
- **Name components** in PascalCase
- **Use TypeScript** for props

```tsx
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### File Naming

- **Components**: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `formatDate.ts`)
- **Types**: `kebab-case.types.ts` (e.g., `user.types.ts`)
- **Hooks**: `use*.ts` (e.g., `useAuth.ts`)

### Code Organization

```
component/
├── ComponentName.tsx      # Main component
├── ComponentName.test.tsx # Tests
├── index.ts               # Barrel export
└── types.ts               # Component-specific types
```

---

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

### Examples

```bash
# Feature
git commit -m "feat(task-manager): add drag and drop functionality"

# Bug fix
git commit -m "fix(shell): resolve navigation menu overflow issue"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Refactor
git commit -m "refactor(shared-ui): extract Button variants to constants"
```

### Scope

- `shell`: Shell application
- `task-manager`: Task Manager app
- `announcements`: Announcements app
- `hr-management`: HR Management app
- `shared-ui`: Shared UI package
- `shared-utils`: Shared utilities
- `shared-types`: Shared types
- `event-bus`: Event bus package
- `config`: Configuration files
- `docs`: Documentation

---

## 🔀 Pull Request Process

### 1. Update Your Branch

```bash
git fetch upstream
git rebase upstream/main
```

### 2. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 3. Create Pull Request

- Go to GitHub
- Click "New Pull Request"
- Select your branch
- Fill out the template

### PR Title Format

```
<type>: <description>
```

Example:
```
feat: Add employee search functionality
fix: Resolve task board drag and drop bug
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added tests
- [ ] All tests pass

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
```

### Review Process

1. **Automated checks** must pass
2. **At least one approval** required
3. **Address feedback** from reviewers
4. **Squash commits** if requested
5. **Merge** will be done by maintainers

---

## 🏗️ Project Structure Guidelines

### Adding a New Component

1. **Choose the right location**
   - App-specific: `apps/{app-name}/components/`
   - Shared: `packages/shared-ui/src/components/`

2. **Create component file**

```tsx
// packages/shared-ui/src/components/NewComponent.tsx
import React from 'react';
import { cn } from '../utils/cn';

export interface NewComponentProps {
  // Props definition
}

export const NewComponent: React.FC<NewComponentProps> = ({ ... }) => {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

3. **Export from index**

```ts
// packages/shared-ui/src/components/index.ts
export * from './NewComponent';
```

### Adding a New Utility

```ts
// packages/shared-utils/src/newUtil.utils.ts
export const newUtilFunction = (input: string): string => {
  // Implementation
  return output;
};
```

### Adding New Types

```ts
// packages/shared-types/src/new.types.ts
export interface NewType {
  id: string;
  name: string;
}

export enum NewEnum {
  VALUE_ONE = 'Value One',
  VALUE_TWO = 'Value Two',
}
```

---

## 🐛 Reporting Bugs

### Before Reporting

1. **Search existing issues**
2. **Check if it's already fixed** in latest version
3. **Reproduce the bug** consistently

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g., macOS]
- Browser: [e.g., Chrome 120]
- Node version: [e.g., 18.17.0]
- pnpm version: [e.g., 8.12.0]

**Additional context**
Any other relevant information
```

---

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Description of the problem

**Describe the solution you'd like**
Clear description of desired feature

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Mockups, examples, etc.
```

---

## 🧪 Testing Guidelines

### Writing Tests (When Test Suite is Added)

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct label', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## 📚 Documentation

### Updating Documentation

- Update README.md for major features
- Add JSDoc comments for functions
- Update DEPLOYMENT.md for deployment changes
- Keep CONTRIBUTING.md current

### JSDoc Example

```typescript
/**
 * Formats a date string to the specified format
 * 
 * @param date - The date to format (string or Date object)
 * @param format - The desired format (e.g., 'YYYY-MM-DD')
 * @returns Formatted date string
 * 
 * @example
 * ```ts
 * formatDate(new Date(), 'DD/MM/YYYY')
 * // Returns: '25/12/2024'
 * ```
 */
export const formatDate = (date: string | Date, format: string): string => {
  // Implementation
};
```

---

## 🎯 Priority Areas

We especially welcome contributions in:

- [ ] Test coverage
- [ ] Documentation improvements
- [ ] Accessibility enhancements
- [ ] Performance optimizations
- [ ] Bug fixes
- [ ] UI/UX improvements

---

## 🙋 Questions?

- Open a [Discussion](https://github.com/OWNER/workly/discussions)
- Email: dev@workly.com
- Join our Slack: [workly.slack.com](https://workly.slack.com)

---

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Contributor hall of fame

---

<div align="center">
  <strong>Thank you for contributing to Workly! 💙</strong>
</div>

