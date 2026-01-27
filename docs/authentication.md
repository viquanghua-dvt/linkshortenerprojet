# Authentication & Security Standards

This document defines the authentication and security requirements for the Link Shortener application.

## Overview

All authentication and user management in this application is handled exclusively by **Clerk**. No alternative authentication methods are permitted.

## Key Requirements

### 1. Clerk-Only Authentication

- **NO alternative authentication methods** should be implemented or used
- All user identity, sessions, and authentication flows must go through Clerk
- Clerk is configured and integrated throughout the application
- Use Clerk's React components and hooks for authentication UI and logic

### 2. Protected Routes

#### Dashboard Page (`/dashboard`)
- **Must be a protected route** - requires user authentication
- Users who are not logged in attempting to access `/dashboard` should be redirected
- Implement protection using Clerk's `auth()` or client-side protection mechanisms
- Ensure no unauthenticated data leaks from this route

### 3. Homepage Route (`/`)
- **Authenticated users accessing homepage must be redirected** to `/dashboard`
- Only unauthenticated users and guests should see the homepage
- This provides a seamless experience by guiding logged-in users to their dashboard

### 4. Authentication UI

#### Sign In & Sign Up Modals
- Both **Sign In and Sign Up flows must launch as modals**
- Do not use full-page authentication routes
- Use Clerk's modal components (`SignInButton`, `SignUpButton` with modal mode)
- Modals should overlay the current page without full navigation

### 5. Server-Side Protection

- Use Clerk's `auth()` function in Server Actions and API routes
- Validate authentication on the server before processing sensitive operations
- Check user session status in server components when needed
- Never expose sensitive data to unauthenticated users

### 6. Client-Side Protection

- Use `useAuth()` hook to access authentication state in client components
- Conditionally render protected content based on authentication status
- Implement optimistic UI updates for auth state changes
- Gracefully handle authentication failures

## Implementation Patterns

### Protecting a Server Component
```typescript
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }
  
  return <>{children}</>;
}
```

### Redirecting Authenticated Users from Homepage
```typescript
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  
  return (
    // Homepage content for unauthenticated users
  );
}
```

### Using Modal Buttons
```typescript
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function AuthButtons() {
  return (
    <>
      <SignInButton mode="modal">
        <button>Sign In</button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button>Sign Up</button>
      </SignUpButton>
    </>
  );
}
```

## Security Best Practices

1. **Always validate on the server** - never trust client-side authentication checks alone
2. **Protect sensitive operations** - require authentication for any action that modifies user data
3. **Session management** - let Clerk handle session creation, validation, and expiration
4. **Error handling** - gracefully handle authentication errors without exposing sensitive information
5. **Environment variables** - keep Clerk API keys and secrets secure in environment variables

## Related Documentation

- See main [AGENTS.md](../AGENTS.md) for general project standards
- TypeScript and type safety apply to all auth-related code
- Server/Client component patterns defined in React standards

## Questions & Updates

If authentication requirements change or conflict with these standards, escalate to the development team. Clerk configuration changes should be documented and communicated to all developers.
