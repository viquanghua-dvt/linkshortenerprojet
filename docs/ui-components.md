# UI Components & shadcn/ui Standards

This document defines the UI component standards for the Link Shortener application.

## Overview

All UI elements in this application **must use shadcn/ui components exclusively**. No custom components should be created unless shadcn/ui does not provide the required functionality.

## Core Requirements

### 1. shadcn/ui Only

- **Use shadcn/ui for all UI components** - buttons, forms, dialogs, cards, etc.
- **NO custom component creation** is permitted without explicit approval
- If shadcn/ui doesn't have what you need, check if an alternative component can serve the purpose
- Leverage existing shadcn/ui components and customize them via props and Tailwind classes

### 2. Component Usage

#### When to Use shadcn/ui
- Navigation and layout (Sidebar, Navigation Menu)
- Forms and input (Input, Textarea, Select, Checkbox, Radio)
- Feedback (Alert, Toast, Dialog, Sheet)
- Data display (Table, Tabs, Accordion)
- Actions (Button, Dropdown Menu)
- Modals and overlays (Dialog, Drawer, Popover)

#### Customization Approach
- Use Tailwind CSS utility classes for styling
- Leverage props provided by shadcn/ui components
- Combine multiple shadcn/ui components to build complex layouts
- Never create wrapper components that duplicate shadcn/ui functionality

### 3. Installation & Import Pattern

```typescript
// Install shadcn/ui components using the CLI
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog

// Import and use in your components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function MyComponent() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter text..." />
      <Button>Click me</Button>
    </div>
  );
}
```

### 4. Styling Guidelines

- Use **Tailwind CSS utility classes** to style shadcn/ui components
- Follow the mobile-first responsive design approach
- Maintain consistent spacing using Tailwind's space utilities
- Use the project's TailwindCSS 4 configuration for colors and themes
- Leverage className props to add custom styles when needed

### 5. Component Composition

Build complex UIs by composing shadcn/ui components:

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LinkForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Short Link</CardTitle>
        <CardDescription>Paste your long URL below</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="https://example.com/very-long-url" />
        <Button className="w-full">Shorten</Button>
      </CardContent>
    </Card>
  );
}
```

## Common Components

### Buttons
```typescript
import { Button } from "@/components/ui/button";

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>
<Button disabled>Disabled</Button>
```

### Forms
```typescript
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

<div className="space-y-2">
  <Label htmlFor="url">URL</Label>
  <Input id="url" placeholder="https://..." />
  <Button type="submit">Submit</Button>
</div>
```

### Dialogs & Modals
```typescript
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>Are you sure?</DialogDescription>
    </DialogHeader>
    <Button onClick={handleConfirm}>Confirm</Button>
  </DialogContent>
</Dialog>
```

## Best Practices

1. **Check before creating** - Always verify if shadcn/ui has the component you need
2. **Use composition** - Combine multiple shadcn/ui components instead of creating new ones
3. **Consistent styling** - Use Tailwind utilities consistently across the application
4. **Accessible by default** - shadcn/ui components are built with accessibility in mind
5. **Props over customization** - Use component props before adding custom CSS

## Design System

All components follow the design system defined by:
- **Color palette** - Tailwind's default colors (customized in `tailwind.config.ts`)
- **Typography** - Tailwind's typography scale
- **Spacing** - Tailwind's space scale
- **Responsive breakpoints** - Tailwind's breakpoints (sm, md, lg, xl, 2xl)

## Related Documentation

- See [AGENTS.md](../AGENTS.md) for general project standards
- See [authentication.md](authentication.md) for auth-specific UI patterns
- TailwindCSS configuration in `tailwind.config.ts`
- Component library documentation at [shadcn/ui](https://ui.shadcn.com/)

## Questions & Updates

If you need a component that shadcn/ui doesn't provide, check the [shadcn/ui component gallery](https://ui.shadcn.com/docs/components/accordion) or discuss alternatives with the team before creating a custom solution.
