# Neon Todo - Agent Guidelines

This document provides instructions for AI agents and developers working on the `neon-todo` repository.

## 1. Environment & Commands

### Build & Run
- **Install**: `npm install`
- **Dev Server**: `npm run dev` (Runs on http://localhost:5173 by default)
- **Build**: `npm run build` (Runs `tsc` + `vite build`)
- **Preview**: `npm run preview`

### Linting & Formatting
- **Lint**: `npm run lint` (ESLint)
- **Fix Lint**: `npm run lint -- --fix`
- **Type Check**: `tsc --noEmit`

### Testing
*Currently no dedicated test runner (Jest/Vitest) is configured.*
- **Manual Test**: Run `npm run dev` and interact with the UI.
- **Single Component Verification**: Verify component logic by importing it in `App.tsx` temporarily if needed.

---

## 2. Code Style & Conventions

### Technology Stack
- **Framework**: React 18+ (Functional Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3.4+
- **Build Tool**: Vite
- **Icons**: Lucide React

### File Structure
- `src/components/`: Reusable UI components (PascalCase)
- `src/types.ts`: Shared TypeScript interfaces/types
- `src/App.tsx`: Main application logic
- `src/index.css`: Global styles & Tailwind imports

### Naming Conventions
- **Files**: `PascalCase.tsx` for components, `camelCase.ts` for utilities.
- **Components**: `PascalCase` (e.g., `TodoItem`).
- **Props Interfaces**: `ComponentNameProps` (e.g., `TodoItemProps`).
- **States**: `[value, setValue]` pattern.
- **Event Handlers**: `handleAction` (e.g., `handleSubmit`, `toggleTodo`).

### TypeScript Rules
- **Explicit Types**: Always define interfaces for props.
- **No `any`**: Avoid `any` type; use `unknown` or specific types.
- **Imports**: Use `import type` for type-only imports to aid tree-shaking.
  ```typescript
  import type { Todo } from '../types';
  ```

### Component Patterns
- **Functional**: Use `React.FC<Props>` or directly destructure props with typed arguments.
- **Clean JSX**: Avoid inline logic > 2 lines; extract to variables or helper functions.
- **Tailwind**:
  - Use utility classes over custom CSS.
  - Group layout classes first, then typography, then visuals.
  - Use `clsx` or template literals for conditional classes.

### State Management
- Use `useState` for local component state.
- Lift state up to `App.tsx` for shared data (like the todo list).
- Immutability: Always create new arrays/objects when updating state (e.g., `[...todos, newTodo]`).

### Styling Guidelines (Neon Theme)
- **Colors**:
  - Primary Accent: `text-neon` / `bg-neon` (`#D4FF00`)
  - Backgrounds: `bg-dark-bg` (`#050505`), `bg-dark-card` (`#0A0A0A`)
  - Text: `text-white` (Primary), `text-zinc-500` (Secondary)
- **Interactions**:
  - Hover effects should be subtle (`duration-300`, `ease-in-out`).
  - Active states should provide immediate feedback.
- **Fonts**: `Inter` family (via Google Fonts).

---

## 3. Error Handling
- **UI Fallbacks**: Handle empty states (e.g., "No tasks found") gracefully.
- **Input Validation**: Trim inputs and check for empty strings before submitting.
- **Console**: Remove `console.log` statements before committing.

## 4. Git & Commits
- **Conventional Commits**: `<type>(<scope>): <description>`
  - `feat`: New features
  - `fix`: Bug fixes
  - `refactor`: Code restructuring
  - `style`: Formatting/CSS changes
  - `chore`: Build/tooling updates
- **Example**: `feat(todo): add delete confirmation animation`

---

## 5. Agent Behavior
- **Analyze First**: Read `package.json` and `tsconfig.json` to understand dependencies.
- **Atomic Changes**: Make small, verifiable changes.
- **Verify**: Always run `npm run build` after making changes to ensure type safety.
- **No Hallucinations**: Do not assume libraries exist (e.g., don't import `framer-motion` unless listed in `package.json`).
- **Documentation Search**: When you need to search docs, use `context7` tools.
