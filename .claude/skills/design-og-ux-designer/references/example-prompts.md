# Sample AI Prompts for Octuple Development

This document provides example prompts you can use with AI coding agents (like Cursor) when building with Octuple.

## Getting Started Prompts

### Basic Component Usage
```
Create a simple login form using Octuple components with email and password fields.
```

```
Build a user profile card using Octuple components showing avatar, name, email, and an edit button.
```

### Dashboard Layouts
```
Create a dashboard layout using Octuple with a header, sidebar navigation, and main content area.
Use @docs/design-system-ai.md for component references.
```

```
Build a responsive grid layout with 3 columns using Octuple's Grid components.
Each column should contain a Card component with a title and description.
```

## Form Prompts

### Simple Forms
```
Create a contact form using Octuple with the following fields:
- Name (required)
- Email (required, email validation)
- Phone (optional)
- Message (textarea, required)
- Submit button
Use @docs/design-system-ai.md for Form components.
```

### Complex Forms
```
Build a multi-step registration form using Octuple components:
Step 1: Personal info (name, email, phone)
Step 2: Account details (username, password)
Step 3: Preferences (checkboxes for interests)
Use Stepper component for navigation. Reference @docs/design-system-ai.md.
```

### Form with Validation
```
Create a form with advanced validation using Octuple:
- Password field with strength indicator
- Confirm password field with match validation
- Terms and conditions checkbox (required)
- Submit button (disabled until valid)
```

## Table Prompts

### Basic Table
```
Create a data table using Octuple with the following columns:
- ID
- Name
- Email
- Status (with colored tags)
- Actions (Edit and Delete buttons)
Include pagination and make it sortable.
```

### Table with Filters
```
Build a user management table with Octuple components:
- Search input above table
- Columns: Avatar, Name, Email, Role, Status, Actions
- Filter dropdowns for Role and Status
- Bulk action buttons (Delete selected, Export)
Reference @docs/design-system-ai.md for Table and Filter components.
```

## Modal Prompts

### Form Modal
```
Create a modal dialog using Octuple that contains a form to add a new user.
Include fields: Name, Email, Role (dropdown), and Save/Cancel buttons.
```

### Confirmation Modal
```
Build a delete confirmation modal using Octuple with:
- Warning message
- Item details to be deleted
- Cancel and Confirm Delete buttons
- Proper error handling
```

## Navigation Prompts

### Sidebar Navigation
```
Create a sidebar navigation menu using Octuple with:
- Logo at top
- Menu items: Dashboard, Users, Settings, Reports
- Submenu for Settings (Profile, Security, Notifications)
- Collapsible functionality
```

### Breadcrumb Navigation
```
Implement breadcrumb navigation using Octuple for:
Home > Products > Category > Product Name
Make each level clickable except the last one.
```

## Layout Prompts

### App Layout
```
Create a complete app layout using Octuple:
- Top navigation bar with logo, menu, and user profile dropdown
- Left sidebar with collapsible navigation
- Main content area with proper spacing
- Footer with links and copyright
```

### Card Grid
```
Build a responsive card grid using Octuple components:
- 4 cards per row on desktop, 2 on tablet, 1 on mobile
- Each card has: image, title, description, and action button
- Cards should have hover effects
```

## Advanced Prompts

### Data Visualization Dashboard
```
Create a dashboard using Octuple with:
- 4 stat cards at the top (showing metrics)
- A table showing recent activity
- Tabs to switch between different views
- Loading states and error handling
Use @docs/design-system-ai.md for all components.
```

### Settings Page
```
Build a settings page using Octuple with:
- Vertical tabs for different settings categories
- Form components for each setting
- Switch components for toggles
- Save and Reset buttons at the bottom
```

### User Management Interface
```
Create a complete user management interface with Octuple:
- Search and filter bar at top
- User table with sorting and pagination
- Add User button that opens a modal form
- Edit and Delete actions for each user
- Confirmation dialogs for destructive actions
Reference @docs/design-system-ai.md for all component APIs.
```

## Component-Specific Prompts

### Working with Tabs
```
Create a tabbed interface using Octuple with 3 tabs:
1. Overview (cards with statistics)
2. Details (form with read-only fields)
3. History (table with activity log)
```

### Using Accordions
```
Build an FAQ section using Octuple's Accordion component with:
- 5 questions and answers
- Only one panel open at a time
- Smooth animations
```

### Upload Component
```
Create a file upload interface using Octuple:
- Drag and drop area
- File list showing uploaded files
- Remove button for each file
- Upload progress indicator
- Validate file types (images only)
```

### Date Picker Usage
```
Build a date range picker for a report filter using Octuple:
- Start date and end date pickers
- Preset ranges (Today, Last 7 days, Last 30 days, This month)
- Apply and Clear buttons
```

## Tips for Writing Effective Prompts

### Do's
✅ Reference `@docs/design-system-ai.md` in your prompts
✅ Be specific about which Octuple components to use
✅ Specify validation rules and error handling needs
✅ Mention responsive behavior if needed
✅ Include state management requirements

### Don'ts
❌ Ask for components from other libraries (Material-UI, Ant Design, etc.)
❌ Request Tailwind CSS classes
❌ Ask for custom CSS solutions
❌ Request raw HTML elements instead of Octuple components

## Example Workflow Prompts

### Complete Feature Development
```
I need to build a product management feature. Using only Octuple components:

1. Create a ProductList page with:
   - Search and filter bar
   - Data table with columns: Image, Name, Price, Stock, Status, Actions
   - Add Product button

2. Create an AddProduct modal with form fields:
   - Product name (required)
   - Description (textarea)
   - Price (number input)
   - Category (select dropdown)
   - Upload product image
   - Save and Cancel buttons

3. Add edit and delete functionality with confirmation dialogs

Reference @docs/design-system-ai.md for all component APIs.
Use TypeScript for all code.
```

## Debugging Prompts

### When Something Doesn't Work
```
I'm getting a TypeScript error with the Octuple Form component.
Here's my code: [paste code]
Check @docs/design-system-ai.md for the correct Form.Item API and fix my code.
```

```
The Octuple Table isn't rendering correctly.
Review my column definitions and fix any issues.
Make sure I'm following the pattern shown in @docs/design-system-ai.md.
```

## Best Practices

1. **Always mention Octuple**: Start prompts with "Using Octuple components..."
2. **Reference the docs**: Include "@docs/design-system-ai.md" when asking for components
3. **Be specific**: Mention exact field names, validation rules, and behavior
4. **Request TypeScript**: Ask for TypeScript code for better type safety
5. **State requirements**: Specify if you need state management or event handlers

## Template Prompt

Use this template for new features:

```
Using Octuple components, create a [FEATURE NAME] with:

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Components needed:
- [Component 1]: [purpose]
- [Component 2]: [purpose]

Behavior:
- [Interaction 1]
- [Interaction 2]

Reference @docs/design-system-ai.md for component APIs.
Use TypeScript with proper typing.
```

---

**Pro Tip**: The more specific your prompt, the better the AI can help you build with Octuple components correctly!

