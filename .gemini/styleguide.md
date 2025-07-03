# ddarahang-fe Frontend Code Style Guide

## Introduction
This style guide defines the coding conventions for the ddarahang-fe frontend project.  
It is based on the Airbnb JavaScript/React Style Guide, Prettier, and TypeScript best practices, with some project-specific adjustments.  
The goal is to ensure code readability, maintainability, and consistency across the team.

---

## Key Principles

- **Readability:** Code should be easy to read and understand for all team members.
- **Consistency:** Consistent style across all files and contributors.
- **Maintainability:** Code should be easy to modify, extend, and debug.
- **Automation:** Use of linters and formatters to enforce style automatically.

---

## General Formatting

### Line Length
- **Maximum line length:** 100–120 characters recommended (Prettier default, not strictly enforced).
- Break long JSX props, objects, or function arguments onto multiple lines for readability.

### Indentation
- **2 spaces per indentation level** (no tabs).

### Semicolons
- **Always use semicolons** at the end of statements.

### Quotes
- **Single quotes** for strings (`'example'`), including JSX attributes.

### Braces and Spacing
- Always put a space before opening braces:  
  `if (condition) { ... }`
- In JSX, break props onto new lines if there are more than two.

---

## Imports

- **Order:**
  1. External libraries (e.g., `react`, `react-router-dom`)
  2. Internal modules (e.g., `src/utils`, `src/components`)
  3. Styles, images, and other assets

- **Absolute imports** are preferred (from `src/` root).
- **No file extensions** for `.ts` and `.tsx` imports.
- **Alphabetical order** within each group is recommended.

Example:
```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { colors } from 'src/styles/Theme';
import MyComponent from 'src/components/MyComponent';
import logo from 'src/assets/logo.svg';
```

---

## Naming Conventions

- **Variables, functions, hooks, props:** `camelCase`
- **Components, classes, types, interfaces:** `PascalCase`
- **Constants:** `SCREAMING_SNAKE_CASE`
- **File and folder names:** `camelCase` or `kebab-case` (e.g., `mainHeader`, `main-header`)
- **Component files:** Always use `.tsx` extension

---

## React & TypeScript

### Functional Components
- Use **arrow functions** for all components:
  ```tsx
  const MyComponent: React.FC<Props> = ({ ... }) => { ... }
  ```

### Props and State
- Always define **explicit types** for props and state.
- Use `interface` or `type` for prop definitions, named in PascalCase.

### TypeScript
- Avoid using `any` type.
- Use type inference where possible, but always type public APIs.
- Name types and interfaces in PascalCase.

---

## Comments

- Write comments to explain **why** something is done, not just **what**.
- Use complete sentences, starting with a capital letter and proper punctuation.
- Avoid redundant comments; prefer self-explanatory code.

---

## Styling

- Use **styled-components** or **Emotion** for all component styles.
- **Do not use inline styles** except for dynamic, one-off cases.
- Use shared color and size variables from `src/styles/Theme.ts` for consistency.
- Example:
  ```tsx
  import styled from '@emotion/styled';
  import { colors, size } from 'src/styles/Theme';

  const Wrapper = styled.div`
    background: ${colors.PRIMARY};
    padding: ${size.SIZE_009};
  `;
  ```

---

## JSX & Formatting

- Use self-closing tags for components without children: `<Component />`
- Avoid unnecessary curly braces in JSX:  
  Prefer `<div>text</div>` over `<div>{'text'}</div>`
- Destructure props in function parameters.

---

## Linting & Formatting Tools

- **ESLint**: Enforces code style and best practices.
  - Extends Airbnb, React, Prettier, TypeScript, and Storybook recommended rules.
  - Example rules:
    - Only allow JSX in `.jsx` and `.tsx` files.
    - Enforce import order and extension rules.
    - Disallow unused variables and imports.
    - Enforce Prettier formatting as errors.
- **Prettier**: Automatically formats code on save.
  - Handles indentation, quotes, semicolons, trailing commas, etc.

---

## Example

```tsx
import React from 'react';
import styled from '@emotion/styled';
import { colors, size } from 'src/styles/Theme';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  background: ${colors.PRIMARY};
  color: ${colors.WHITE};
  padding: ${size.SIZE_009};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RectangleButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>
    {label}
  </StyledButton>
);

export default RectangleButton;
```

---

## Additional Guidelines

- **No console logs** in committed code (except for debugging, which should be removed before merging).
- **No unused variables or imports**.
- **No magic numbers**; use named constants where possible.
- **No direct DOM manipulation**; always use React refs and state.
- **No inline event handlers** with complex logic; define handler functions outside JSX.

---

## Tooling

- **Formatter:** Prettier (auto-formats code on save)
- **Linter:** ESLint (checks for style and best practices)
- **Recommended VSCode Extensions:** ESLint, Prettier
