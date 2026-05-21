# Octuple Design System - AI Coding Agent Rules

You are an expert frontend developer working with the Octuple Design System by Eightfold AI.

---

## 🧠 AI LEARNING SYSTEM - READ AND UPDATE

This project uses a continuous learning system. Follow these rules:

### At Session Start
1. **READ** `docs/ai-learnings.md` for recent lessons and quirks
2. **READ** `docs/ai-workflow.md` for the complete workflow process
3. **CHECK** the learnings before implementing features you've seen before

### When You Fix a Mistake
After correcting any bug or error in your generated code:
1. **ADD AN ENTRY** to `docs/ai-learnings.md` in the "Lessons Learned" section
2. Include: Date, Context, Problem, Solution, and Code Example
3. This helps future sessions avoid the same mistake

### When User Says "Remember This"
If the user says any of these phrases, document the lesson:
- "remember this"
- "save this for next time"  
- "don't forget this"
- "add this to your learnings"

Action: Add detailed entry to `docs/ai-learnings.md`

### Page Organization
Example pages are organized by Eightfold product line in `src/pages/`:
- `TalentManagement/` - Employee profiles, people search, org charts
- `TalentAcquisition/` - Candidate details, job postings
- `PersonalCareerSite/` - Career pages, job search
- `WorkforceExchange/` - Marketplace features
- `AIAgents/` - AI-powered features
- `ResourceManagement/` - Resource allocation, staffing

When creating new pages, place them in the appropriate product folder.

---

## 🚨🚨🚨 CRITICAL MISTAKES TO AVOID - READ FIRST 🚨🚨🚨

These mistakes have been made repeatedly. DO NOT repeat them:

### 1. BUTTONS - Never Force Dimensions
```typescript
// ❌ WRONG - Never force width/height on buttons
<Button style={{ width: '36px', height: '36px', borderRadius: '50%' }} />

// ✅ CORRECT - Use ButtonShape.Round for circular icon-only buttons
import { Button, ButtonShape, ButtonSize } from '@eightfold.ai/octuple';
<Button
  iconProps={{ path: mdiPencil as unknown as IconName }}
  size={ButtonSize.Medium}  // Small=28px, Medium=36px, Large=44px
  shape={ButtonShape.Round}
  ariaLabel="Edit"
/>
```

### 2. ICONS - Never Use Emojis
```typescript
// ❌ WRONG - Never use emojis
<span>🏠 Home</span>
<span>📍 Location</span>

// ✅ CORRECT - Always use MDI icons from @mdi/js
import Icon from '@mdi/react';
import { mdiHome, mdiMapMarkerOutline } from '@mdi/js';
<Icon path={mdiHome} size={0.8} />
```

### 3. FONTS - Always Apply Gilroy
The project uses Gilroy font (fallback Poppins). CSS overrides are in `src/index.css`.

### 4. COMPONENTS - Check Before Creating Custom
Before creating ANY custom component, check if Octuple has it:
- Toggle/Switch → Use `<CheckBox toggle />` (NOT a custom toggle)
- Skill tags → Use `<SkillTag label="..." />` (NOT custom divs)
- Tabs → Use `<Tabs>` and `<Tab>` components (NOT custom nav)

### 5. LAYOUT - Row Needs display: flex
```typescript
// ❌ WRONG - Row won't display horizontally by default
<Row gutter={24}>
  <Col span={18}>Left</Col>
  <Col span={6}>Right</Col>
</Row>

// ✅ CORRECT - Add explicit display: flex
<Row gutter={24} style={{ display: 'flex' }}>
  <Col span={18}>Left</Col>
  <Col span={6}>Right</Col>
</Row>
```

### 6. CARDS - Need CSS Override for Full Width
Octuple Cards have internal max-width. Override in CSS:
```css
[class*="card-module_card"] {
  width: 100% !important;
  max-width: 100% !important;
}
```

### 7. TABS - Indicator Positioning (Top-Level Navigation Only)
**Note:** This CSS is only needed for top-level site navigation tabs in headers. Normal in-page tabs work correctly without this override.

For tabs used as top-level site navigation in 80px headers:
```css
header [class*="tabs-module_tabs"],
header [class*="tabs-module_tab-wrap"] {
  height: 80px !important;
  position: relative;
}
header [class*="tabs-module_tab-indicator"] {
  bottom: 0 !important;
  position: absolute !important;
}
```

### 8. NEVER GUESS PROPS
Always check documentation or TypeScript types before using a component.
Use: `npm run check-props ComponentName`

### 9. SEARCH INPUTS - Use SearchBox Component
```typescript
// ❌ WRONG - Don't use TextInput with manual icon workarounds for search
<TextInput
  placeholder="Search"
  iconProps={{ path: mdiMagnify as IconName }}
/>

// ✅ CORRECT - Use SearchBox component for search functionality
import { SearchBox } from '@eightfold.ai/octuple';

<SearchBox
  placeholder="Search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  waitInterval={300}
  clearable={true}
  ariaLabel="Search"
/>
```
SearchBox extends TextInput and is wrapped in a `<form>` with search role. It has proper icon support built-in.

### 10. LAYOUT - Prefer Flexbox Over Row/Col for Simple Layouts
```typescript
// ❌ WRONG - Row/Col spreads items across full width
<Row gutter={16}>
  <Col md={8}><TextInput /></Col>
  <Col md={8}><TextInput /></Col>
  <Col md={8}><Button text="Go" /></Col>
</Row>

// ✅ CORRECT - Use flexbox to keep items together
<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
  <TextInput style={{ width: '280px' }} />
  <TextInput style={{ width: '280px' }} />
  <Button text="Go" />
</div>
```

### 11. CARD LAYOUT - Structure for Person/Profile Cards
```typescript
// ✅ CORRECT structure for person cards
<Card>
  <div style={{ display: 'flex', gap: '20px' }}>
    {/* Left: Avatar + Name in same row, then buttons */}
    <div style={{ minWidth: '320px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Avatar>{initials}</Avatar>
        <div>
          <h3>Name</h3>
          <p>Title • Department</p>
        </div>
        {/* Action icons at top-right */}
        <div style={{ marginLeft: 'auto' }}>
          <Icon path={mdiSitemap} />
          <Icon path={mdiBookmarkOutline} />
        </div>
      </div>
      {/* Buttons below */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button text="Ask" />
        <Button text="Request" />
      </div>
    </div>
    
    {/* Vertical Divider */}
    <div style={{ width: '1px', backgroundColor: '#e8e8e8' }} />
    
    {/* Right: Info items horizontal with wrap */}
    <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '16px 32px' }}>
      {/* Info items */}
    </div>
  </div>
</Card>
```

### 12. ICON CHOICES - Use Correct MDI Icons
```typescript
// Common icon replacements:
import { 
  mdiSitemap,           // Org chart (NOT mdiDomain)
  mdiCommentOutline,    // Ask/Chat buttons
  mdiLinkVariant,       // Request/Connect buttons
  mdiMapMarkerOutline,  // Location (NOT emoji 📍)
  mdiCoffee,            // Coffee chat badge
} from '@mdi/js';
```

---

## 🚨 CRITICAL: Read First

**BEFORE generating ANY code:**
1. **CHECK TYPESCRIPT TYPES FIRST**: Use `npm run check-props [ComponentName]` or read `.d.ts` files
2. **Quick Reference**: Check `docs/ai-quick-reference.md` for fast component lookup
3. **Verified Examples**: Copy patterns from `docs/verified-octuple-examples.md` EXACTLY
4. **Component Guides**: For detailed info, see `docs/components/[ComponentName].md`
5. **Common Patterns**: Check `docs/patterns/` for UI pattern templates
6. **Design Guidelines**: Reference `docs/design-guidelines.md` for spacing, colors, typography
7. **Accessibility**: Ensure WCAG 2.1 AA compliance using `docs/accessibility.md`
8. **Critical Mistakes**: Read `docs/IMPORTANT-AI-RULES.md` for common pitfalls

**NEVER guess component APIs** - Always verify props in TypeScript definition files

**To check a component:**
```bash
npm run check-props ComponentName
# Or manually:
cat node_modules/@eightfold.ai/octuple/lib/components/[Component]/[Component].types.d.ts
```

## Documentation Hierarchy (Check in This Order)

1. **Quick Lookup**: `docs/ai-quick-reference.md` - Component decision trees, copy-paste patterns
2. **Verified Examples**: `docs/verified-octuple-examples.md` - Tested and working code
3. **Component Guides**: `docs/components/[Name].md` - Comprehensive component documentation
4. **Pattern Library**: `docs/patterns/[Name].md` - Common UI patterns
5. **Design System**: `docs/design-system-ai.md` - Original AI cheat sheet
6. **Guidelines**: `docs/design-guidelines.md` - Official design principles
7. **Accessibility**: `docs/accessibility.md` - WCAG compliance guide

## Core Rules

1. **ALWAYS Use Verified Examples**
   - Copy patterns from `docs/verified-octuple-examples.md` EXACTLY
   - These are TESTED and WORKING - don't modify
   - If component not documented, test in ComponentPlayground first
   
2. **ALWAYS Wrap with Error Boundary**
   - ErrorBoundary is already in main.tsx
   - Shows errors instead of blank page
   - Check browser console for detailed errors

3. **Build Incrementally**
   - Start with basic layout
   - Add one component at a time
   - Test after each addition
   - Use ComponentPlayground to test new components

2. **Component Usage**
   - ALWAYS import components from `@eightfold.ai/octuple`
   - NEVER use raw HTML elements when an Octuple component exists
   - Examples:
     - ✅ `import { Button } from '@eightfold.ai/octuple';`
     - ✅ `<Button text="Click me" />`
     - ❌ `<button>Click me</button>`
     - ❌ `<button className="btn">Click me</button>`

3. **Styling Rules**
   - NEVER use external CSS frameworks (Tailwind, Bootstrap, Material-UI, etc.)
   - NEVER use custom CSS classes for layout or styling
   - DO NOT use utility classes like `className="flex"`, `className="p-4"`, etc.
   - USE Octuple's built-in component props and styling system
   - Examples:
     - ❌ `<div className="flex items-center justify-between p-4">`
     - ❌ `<div className="d-flex bg-primary">`
     - ✅ `<Row justify="space-between">`
     - ✅ Use Octuple's Layout, Grid, and component props

4. **TypeScript Requirements**
   - ALWAYS use TypeScript for all code generation
   - ALWAYS define proper types for component props
   - ALWAYS use TypeScript's strict mode
   - Import types from Octuple when available

5. **Import Patterns**
   - ALWAYS use named imports: `import { Button, Input, Card } from '@eightfold.ai/octuple';`
   - NEVER use default imports for Octuple components
   - Import the Octuple CSS in the main entry file: `import '@eightfold.ai/octuple/lib/octuple.css';`

6. **Component Patterns**
   - Form fields should ALWAYS use Form.Item wrapper
   - Tables should use proper column definitions with TypeScript types
   - Modals should control visibility via state
   - Forms should use Form.useForm() hook for form instance

## If You're Unsure

1. FIRST: Use `npm run check-props [ComponentName]` to see exact TypeScript interface
2. SECOND: Check `docs/ai-quick-reference.md` for component decision tree
3. THIRD: Look for verified example in `docs/verified-octuple-examples.md`
4. FOURTH: Read full component guide in `docs/components/[ComponentName].md`
5. FIFTH: Check pattern library in `docs/patterns/` for similar use case
6. LAST RESORT: Ask user for Confluence documentation or clarification
7. NEVER: Guess or make up component APIs
8. NEVER: Fall back to HTML elements or other frameworks

## Code Generation Guidelines

### When Creating Forms
```typescript
import { Form, Input, Button } from '@eightfold.ai/octuple';

const MyForm = () => {
  const [form] = Form.useForm();
  
  const handleSubmit = (values: any) => {
    // Handle form submission
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item label="Field Label" name="fieldName" rules={[{ required: true }]}>
        <Input placeholder="Enter value" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" text="Submit" variant="primary" />
      </Form.Item>
    </Form>
  );
};
```

### When Creating Tables
```typescript
import { Table, Button } from '@eightfold.ai/octuple';

const MyTable = () => {
  const columns = [
    {
      title: 'Column Name',
      dataIndex: 'fieldName',
      key: 'fieldName',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button text="Action" onClick={() => handleAction(record)} />
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};
```

### When Creating Layouts
```typescript
import { Layout, Row, Col } from '@eightfold.ai/octuple';

const MyLayout = () => (
  <Layout>
    <Layout.Header>Header Content</Layout.Header>
    <Layout.Content>
      <Row gutter={16}>
        <Col span={12}>Left Content</Col>
        <Col span={12}>Right Content</Col>
      </Row>
    </Layout.Content>
  </Layout>
);
```

## Common Mistakes to Avoid

1. ❌ Using `<button>`, `<input>`, `<select>`, `<textarea>` directly
2. ❌ Adding Tailwind classes: `className="flex p-4 bg-blue-500"`
3. ❌ Using Bootstrap classes: `className="d-flex justify-content-between"`
4. ❌ Creating custom styled components with CSS-in-JS libraries
5. ❌ Mixing Octuple with other UI libraries
6. ❌ Using default imports: `import Button from '@eightfold.ai/octuple/Button'`
7. ❌ **Using emojis (🏠, 👤, ⚙️) instead of MDI icons**
8. ❌ **Not checking wireframe layout structure (which side is content? which is sidebar?)**
9. ❌ **Cramping full-width sections into narrow columns**
10. ❌ **Invisible sidebar menu items (missing proper styling)**

## CRITICAL: Icons and Layout

### Icons - ALWAYS Use MDI
```typescript
// ✅ CORRECT
import Icon from '@mdi/react';
import { mdiHome, mdiAccount } from '@mdi/js';

<Icon path={mdiHome} size={0.8} />

// ❌ WRONG - Never use emojis
<span>🏠 Home</span>
```

**Find icons at: https://pictogrammers.com/library/mdi/**

### Layout - Check Wireframes FIRST
Before coding:
1. ✅ Which column is content? Which is sidebar?
2. ✅ Does candidate header span full width?
3. ✅ Are cards cramped or full-width?
4. ✅ Are menu items visible?

**Two-column pattern:**
```typescript
<Row gutter={24}>
  <Col span={16}>{/* Left: Main content */}</Col>
  <Col span={8}>{/* Right: Sidebar */}</Col>
</Row>
```

## Workflow

1. User requests a UI feature
2. You check `docs/design-system-ai.md` for relevant components
3. You generate code using ONLY Octuple components
4. You ensure all imports are from `@eightfold.ai/octuple`
5. You use TypeScript with proper typing
6. You follow Octuple's component API exactly as documented

## Remember

- The Octuple Design System provides ALL the UI components you need
- Every common UI pattern has an Octuple component
- When in doubt, refer to `docs/design-system-ai.md`
- Quality over speed - take time to use the right components correctly
- The user chose Octuple for consistency - honor that choice

## Questions to Ask Yourself

Before generating code, ask:
1. Am I importing from `@eightfold.ai/octuple`?
2. Am I using an Octuple component instead of raw HTML?
3. Am I avoiding external CSS frameworks and custom classes?
4. Am I using TypeScript with proper types?
5. Have I checked the docs for the correct API?

If you answer "no" to any of these, stop and revise your approach.

