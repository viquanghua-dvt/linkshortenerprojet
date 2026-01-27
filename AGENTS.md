# Agent Instructions

This document defines the coding standards and conventions that all LLM agents must follow when developing or modifying code in this project. These guidelines ensure consistency, maintainability, and quality across the entire codebase.

## Quick Reference

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Clerk
- **Package Manager**: npm
- **Node Target**: ES2017

## Project Overview

This is a Next.js-based Link Shortener application with the following key characteristics:
- Full-stack TypeScript implementation
- Server-side rendering with Next.js App Router
- PostgreSQL database with Drizzle ORM for type-safe queries
- Clerk for authentication and user management
- TailwindCSS for styling with utility-first approach
- Component-based architecture

## Documentation Structure

Detailed guidelines are separated into the following documents in the `/docs` directory.

### ⚠️ CRITICAL REQUIREMENT

**ALWAYS read the relevant individual instructions files within the ./docs directory BEFORE generating ANY code.** This is non-negotiable and applies to every code generation task, regardless of scope or complexity.

**Never skip this step.** Violations of documentation requirements will result in code that must be rewritten.

#### Documentation Files (Read Before Coding)
- [authentication.md](/docs/authentication.md) - Clerk authentication, protected routes, and security requirements
- [ui-components.md](/docs/ui-components.md) - shadcn/ui component usage and styling standards
- Additional documentation coming soon


## Core Principles

### 1. Type Safety First
- Always use TypeScript - never use `any` type without explicit justification
- Define clear interfaces and types for all data structures
- Enable strict mode in tsconfig (already configured)

### 2. React Best Practices
- Use functional components with hooks
- Prefer server components by default in Next.js App Router
- Minimize client-side state and computation
- Use "use client" directive only when necessary

### 3. Clean Code
- Follow the ESLint configuration (Next.js core-web-vitals and TypeScript rules)
- Keep functions small and focused
- Use descriptive variable and function names
- Comment complex logic, not obvious code

### 4. Database Design
- Use Drizzle ORM for all database operations
- Design schema with referential integrity in mind
- Leverage TypeScript for compile-time query validation
- Always validate user input before database operations

### 5. Authentication & Security
- Use Clerk for all authentication flows
- Protect server actions with authentication checks
- Never expose sensitive data in client components
- Validate all user input

### 6. Styling
- Use TailwindCSS utility classes exclusively
- Follow mobile-first responsive design approach
- Maintain consistent spacing and typography
- Use Tailwind's built-in color palette

### 7. Performance
- Implement proper code splitting with dynamic imports
- Optimize images and assets
- Minimize client-side JavaScript bundles
- Use Next.js built-in optimizations

## Getting Started

**Before starting ANY work**, you MUST read the relevant documentation files in the `/docs` directory that apply to your task.

When implementing features or fixing bugs:

1. **Identify the relevant documentation** - Determine which `.md` files in `/docs` apply to your work
2. **Read the relevant documentation** - Study the specific guidelines before writing any code
3. **Follow the established patterns** - Adhere to all standards defined in the documentation
4. **Run ESLint before committing**: `npm run lint`
5. **Test changes thoroughly**
6. **Keep commits focused and well-documented**

Do not proceed with code generation if you have not read the relevant documentation files.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Key Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.1.4 | React framework with SSR |
| React | 19.2.3 | UI library |
| TypeScript | 5 | Type safety |
| Drizzle ORM | 0.45.1 | Database ORM |
| Clerk | 6.36.10 | Authentication |
| TailwindCSS | 4 | Styling |
| PostgreSQL | Latest | Database |

## Questions & Updates

If guidance conflicts with actual project needs, prioritize:
1. Type safety and security
2. Performance and user experience
3. Code maintainability
4. Consistency with existing patterns

When in doubt, refer to the specific standard documents or check similar implementations in the codebase.
