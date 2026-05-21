# AI Quick Reference Guide

**Purpose:** Lightning-fast component selection and usage for AI coding agents  
**Last Updated:** November 20, 2024  
**Octuple Version:** 2.54.2

---

## 🚨 CRITICAL: Read First

**Golden Rules for AI Agents:**

1. **NEVER GUESS**: Check TypeScript types: `npm run check-props [ComponentName]`
2. **COPY EXACTLY**: Use verified examples: `docs/verified-octuple-examples.md`
3. **READ FIRST**: Check component guides: `docs/components/[ComponentName].md`
4. **PATTERN FIRST**: Check patterns: `docs/patterns/` before building from scratch
5. **ENUMS ONLY**: Use TypeScript enums, NEVER string literals

---

## 🚨 Common Problems Quick Lookup

| Problem | Solution |
|---------|----------|
| Search icon outside TextInput | Use wrapper div with absolute positioning (see below) |
| Row/Col items spread across page | Use flexbox instead for grouped items |
| Row/Col items stack vertically | Add `style={{ display: 'flex' }}` to Row |
| Cards not full width | Add CSS: `[class*="card-module_card"] { width: 100% !important; }` |
| Tab indicator outside header | Add CSS to position indicator (see IMPORTANT-AI-RULES.md) |
| Buttons wrong size when circular | Use `shape={ButtonShape.Round}` NOT forced dimensions |
| Avatar/Name not in same row | Use flexbox row, not Row/Col |
| Action icons at bottom | Put them in flex container at top-right |

### TextInput with Icon (Copy This)

```tsx
<div style={{ position: 'relative', width: '280px' }}>
  <Icon path={mdiMagnify} size={0.8} style={{ 
    position: 'absolute', left: '12px', top: '50%', 
    transform: 'translateY(-50%)', color: '#8c8c8c',
    pointerEvents: 'none', zIndex: 1,
  }} />
  <TextInput placeholder="Search" style={{ width: '100%', paddingLeft: '36px' }} />
</div>
```

### Search Section (Copy This)

```tsx
<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
  <TextInput placeholder="Search" style={{ width: '280px' }} />
  <TextInput placeholder="Location" style={{ width: '280px' }} />
  <Button text="Go" variant={ButtonVariant.Primary} />
</div>
```

### Common Icon Imports

```tsx
import { 
  mdiSitemap,           // Org chart (NOT mdiDomain)
  mdiBookmarkOutline,   // Save/bookmark
  mdiCommentOutline,    // Ask/chat
  mdiLinkVariant,       // Request/connect
  mdiMapMarkerOutline,  // Location
  mdiCoffee,            // Coffee chat
  mdiMagnify,           // Search
} from '@mdi/js';
```

---

## 🎯 Component Selection Decision Trees

### 🔘 Need a Clickable Element?

```
What action does it perform?
├─ Primary action (most important, one per screen)
│  └─ Button variant={ButtonVariant.Primary}
├─ Secondary action (second level emphasis)
│  └─ Button variant={ButtonVariant.Secondary}
├─ Tertiary action (themed)
│  └─ Button variant={ButtonVariant.Default}
├─ Subtle tertiary action (light gray, place anywhere)
│  └─ Button variant={ButtonVariant.Neutral}
├─ Least emphasized action (white background)
│  └─ Button variant={ButtonVariant.SystemUI}
├─ Destructive action (delete, remove)
│  └─ Button variant={ButtonVariant.SystemUI} disruptive={true}
└─ With dropdown options
   └─ Button + Dropdown component
```

**Quick Copy:**
```tsx
import { Button, ButtonVariant } from '@eightfold.ai/octuple';
<Button text="Save" variant={ButtonVariant.Primary} onClick={handleSave} />
```

---

### 📝 Need User Input?

```
What type of input?
├─ Single line text
│  ├─ General text → TextInput
│  ├─ Password → TextInput htmlType="password"
│  ├─ Email → TextInput htmlType="email"
│  ├─ Numbers only → TextInput numbersOnly={true}
│  └─ With search → TextInput iconProps={{ path: mdiMagnify }}
│
├─ Multiple lines
│  └─ TextArea rows={4}
│
├─ Selection from options
│  ├─ Single choice from list → Select options={[...]}
│  ├─ Multiple choices → Select multiple={true}
│  ├─ One of few options (2-5) → RadioButton group
│  └─ With actions in dropdown → Dropdown
│
├─ Boolean choice
│  ├─ Single yes/no → CheckBox
│  ├─ Toggle on/off → Switch
│  └─ Multiple yes/no → CheckBoxGroup
│
├─ Date/Time
│  ├─ Single date → DatePicker
│  ├─ Date range → DatePicker range={true}
│  └─ Time only → TimePicker
│
└─ Numeric range
   └─ Slider min={0} max={100}
```

**Quick Copy:**
```tsx
import { TextInput, Select, CheckBox } from '@eightfold.ai/octuple';

// Text input
<TextInput placeholder="Enter name" value={value} onChange={(e) => setValue(e.target.value)} />

// Select
<Select options={options} value={selected} onChange={setSelected} />

// Checkbox
<CheckBox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} label="I agree" />
```

---

### 📊 Need to Display Data?

```
What kind of data?
├─ Tabular data (rows/columns)
│  ├─ Simple table → Table dataSource={[...]} columns={[...]}
│  ├─ With pagination → Table pagination={{ pageSize: 10 }}
│  └─ With sorting → columns: [{ sorter: true }]
│
├─ List of items
│  ├─ Simple list → map() with Row/Col
│  ├─ Card list → map() with Card
│  └─ With actions → Card with actions prop
│
├─ Key-value pairs
│  ├─ Simple pairs → Card with sections
│  └─ Grouped data → Multiple Card components
│
├─ Statistics/Metrics
│  ├─ Single metric → Card with styled content
│  ├─ Multiple metrics → Row/Col with Card grid
│  └─ With trend → Include arrow icons (↑↓)
│
└─ Progress/Status
   ├─ Linear progress → Stepper (horizontal/vertical)
   ├─ Loading state → Spinner
   └─ Status indicator → Badge or Pill
```

**Quick Copy:**
```tsx
import { Table, Card, Row, Col } from '@eightfold.ai/octuple';

// Table
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
];
<Table dataSource={data} columns={columns} rowKey="id" />

// Metric cards
<Row gutter={16}>
  <Col span={6}>
    <Card>
      <div style={{ fontSize: '14px' }}>Total Users</div>
      <div style={{ fontSize: '32px', fontWeight: 'bold' }}>1,234</div>
    </Card>
  </Col>
</Row>
```

---

### 📐 Need Layout Structure?

```
What layout?
├─ Full page with sidebar
│  └─ Layout > Aside (width={240}) + Layout > Header + Content
│     Pattern: docs/patterns/navigation.md
│
├─ Simple page (no sidebar)
│  └─ Layout > Header + Content
│
├─ Two columns (side-by-side) - 12-column grid
│  ├─ 50/50 → Row/Col span={6}/{6}
│  ├─ 66/33 → Row/Col span={8}/{4}
│  └─ 75/25 → Row/Col span={9}/{3}
│     Pattern: docs/patterns/two-column-layout.md
│
├─ Three columns
│  └─ Row/Col span={4}/{4}/{4}
│
├─ Card grid (responsive)
│  └─ Row with gutter + Col span={3} (4 columns)
│     Pattern: docs/patterns/card-grid.md
│
└─ Dashboard layout
   └─ Metrics Row + Content Row/Col
      Pattern: docs/patterns/dashboard-layout.md
```

**Quick Copy:**
```tsx
import { Layout, Row, Col } from '@eightfold.ai/octuple';

// With sidebar
<Layout style={{ minHeight: '100vh' }}>
  <Layout.Aside width={240}>Sidebar</Layout.Aside>
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
  </Layout>
</Layout>

// Two columns (CRITICAL: explicit flex!)
<Row gutter={24} style={{ display: 'flex', flexWrap: 'nowrap' }}>
  <Col span={16} style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}>
    Main Content
  </Col>
  <Col span={8} style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
    Sidebar
  </Col>
</Row>
```

---

### 🧭 Need Navigation?

```
What navigation type?
├─ Main menu (sidebar)
│  └─ Menu mode="inline" items={[...]}
│     With icons: iconProps={{ path: mdiIcon as IconName }}
│     Pattern: docs/patterns/navigation.md
│
├─ Top navigation bar
│  └─ Menu mode="horizontal" items={[...]}
│
├─ Content tabs
│  └─ Tabs with <Tab> children
│     Props: value, onChange on Tabs
│     Props: value, label, icon on Tab
│     Pattern: docs/patterns/user-profile.md
│
├─ Page hierarchy
│  └─ Breadcrumb links={[{ url, children }]}
│     ⚠️ Use 'children' not 'text' or 'label'
│
├─ Pagination
│  └─ Pagination current={1} total={100}
│
└─ Multi-step process
   └─ Stepper activeStepIndex={0} steps={[...]}
      Pattern: docs/patterns/stepper-workflow.md
```

**Quick Copy:**
```tsx
import { Menu, Tabs, Tab, Breadcrumb, Stepper } from '@eightfold.ai/octuple';
import { mdiHome } from '@mdi/js';
import { IconName } from '@mdi/react';

// Menu with icons
const menuItems = [
  { key: 'home', label: 'Home', iconProps: { path: mdiHome as IconName } }
];
<Menu items={menuItems} />

// Tabs
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="tab1" label="Tab 1">Content 1</Tab>
  <Tab value="tab2" label="Tab 2">Content 2</Tab>
</Tabs>

// Breadcrumb
<Breadcrumb links={[
  { url: '/', children: 'Home' },
  { children: 'Current Page' }
]} />
```

---

### 🎭 Need to Show/Hide Content?

```
What interaction?
├─ Modal dialog (blocks page)
│  └─ Modal visible={isOpen} onClose={setIsOpen}
│
├─ Side panel (slides from side)
│  └─ Drawer visible={isOpen} placement="right"
│
├─ Dropdown menu
│  └─ Dropdown items={[...]}
│
├─ Tooltip/popover
│  └─ Tooltip content="..." children={<Button />}
│
├─ Collapsible section
│  └─ Card with custom collapse state
│
└─ Tabbed content
   └─ Tabs + Tab (see Navigation above)
```

**Quick Copy:**
```tsx
import { Modal, Button, ButtonVariant } from '@eightfold.ai/octuple';

const [isOpen, setIsOpen] = useState(false);

<Button text="Open Modal" onClick={() => setIsOpen(true)} />
<Modal
  visible={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={[
    <Button key="cancel" text="Cancel" onClick={() => setIsOpen(false)} />,
    <Button key="ok" text="OK" variant={ButtonVariant.Primary} />
  ]}
>
  Modal content here
</Modal>
```

---

### 👤 Need User-Related Display?

```
What to display?
├─ User avatar
│  ├─ With initials → Avatar size="40px" type="round">JD</Avatar>
│  ├─ With image → Avatar src="..." alt="..."
│  └─ With icon → Avatar icon={mdiAccount as IconName}
│     ⚠️ size is STRING with unit ("40px" not 40)
│
├─ Status badge
│  ├─ Count badge → Badge count={5}
│  ├─ Dot badge → Badge dot
│  └─ With component → Badge count={3}><Button /></Badge>
│
└─ Tags/Pills
   ├─ Simple tag → Pill label="Tag"
   ├─ With icon → Pill iconProps={{ path: mdiIcon }}
   ├─ Closable → Pill type={PillType.closable} onClose={...}
   └─ Themed → Pill theme="green" (green, yellow, red, blue, etc.)
```

**Quick Copy:**
```tsx
import { Avatar, Badge, Pill, PillType } from '@eightfold.ai/octuple';

// Avatar with initials
<Avatar size="40px" type="round">JD</Avatar>

// Badge with count
<Badge count={5}>
  <Button text="Notifications" />
</Badge>

// Pill
<Pill label="React" theme="blue" />
<Pill label="Tag" type={PillType.closable} onClose={handleRemove} />
```

---

### ⏳ Need Loading/Loading State?

```
What loading scenario?
├─ Content loading (known shape)
│  ├─ Text loading → Skeleton variant={SkeletonVariant.Text}
│  ├─ Avatar loading → Skeleton variant={SkeletonVariant.Circular}
│  ├─ Image loading → Skeleton variant={SkeletonVariant.Rectangular}
│  └─ Card loading → Multiple Skeleton components
│     Pattern: docs/components/Skeleton.md
│
├─ Indeterminate loading
│  ├─ Page loading → Spinner (Loader) centered
│  ├─ Button loading → Button loading={true}
│  └─ Inline loading → Spinner size="small"
│
├─ Progress indication
│  ├─ Linear progress → Progress type={ProgressType.Line}
│  ├─ Circular progress → Progress type={ProgressType.Circle}
│  └─ Multi-step progress → Stepper or Timeline
│
└─ Staggered/Sequential loading
   └─ FadeIn with delay on each item
      Pattern: docs/components/FadeIn.md
```

**Quick Copy:**
```tsx
import { Skeleton, SkeletonVariant, SkeletonAnimation, Spinner, FadeIn } from '@eightfold.ai/octuple';

// Content loading skeleton
<Skeleton variant={SkeletonVariant.Text} width={200} height={20} />
<Skeleton variant={SkeletonVariant.Circular} width={40} height={40} />
<Skeleton variant={SkeletonVariant.Rectangular} width={300} height={200} />

// Card skeleton
<Card>
  <Skeleton variant={SkeletonVariant.Circular} width={40} height={40} />
  <Skeleton variant={SkeletonVariant.Text} width="60%" />
  <Skeleton variant={SkeletonVariant.Text} width="80%" />
</Card>

// Sequential fade-in
{items.map((item, index) => (
  <FadeIn key={index} delay={index * 100} duration={300}>
    <div>{item}</div>
  </FadeIn>
))}
```

---

### 📅 Need Timeline/Progress Flow?

```
What type of flow?
├─ Linear multi-step process (form, wizard)
│  └─ Stepper current={stepIndex} items={[...]}
│     Props: current, items, onChange
│     Pattern: docs/patterns/stepper-workflow.md
│
├─ Activity timeline (chronological events)
│  └─ Timeline current={activeIndex} items={[...]}
│     Props: lineStyle, showActiveStepIndex
│     Use for: Activity feed, order tracking
│     Pattern: docs/components/Timeline.md
│
├─ Individual step customization
│  └─ Step with custom icon/status
│     Props: nodeIcon, status, nodeAriaLabelText
│     Used within Stepper or Timeline
│
└─ Progress percentage
   └─ Progress type={ProgressType.Line} percent={60}
```

**Quick Copy:**
```tsx
import { Stepper, Timeline, Step, StepperLineStyle } from '@eightfold.ai/octuple';

// Multi-step form
<Stepper current={currentStep} items={[
  { title: 'Personal Info', description: 'Name, email' },
  { title: 'Address', description: 'Street, city' },
  { title: 'Review', description: 'Confirm details' }
]} onChange={setCurrentStep} />

// Activity timeline
<Timeline
  current={2}
  items={[
    { title: 'Order Placed', description: '10:00 AM' },
    { title: 'Processing', description: '10:15 AM' },
    { title: 'Shipped', description: '2:30 PM' }
  ]}
  lineStyle={StepperLineStyle.Solid}
/>

// Custom step with icon
<Stepper current={1}>
  <Step title="Account" nodeIcon={mdiAccount} />
  <Step title="Email" nodeIcon={mdiEmail} />
</Stepper>
```

---

### 🏷️ Need Skills/Tags Display?

```
What complexity?
├─ Simple tags (keywords, categories)
│  ├─ Static tag → Pill label="React"
│  ├─ Removable tag → Pill type={PillType.closable}
│  └─ Multiple tags → Array of Pills
│
├─ Skills with assessment
│  ├─ Simple skill tag → SkillTag label="JavaScript"
│  │  Props: assessment, removable, clickable
│  │  Use for: Compact skill lists, tag selection
│  │  Pattern: docs/components/SkillTag.md
│  │
│  └─ Complex skill block → SkillBlock label="Leadership"
│     Props: assessment, endorsement, expandable, menuItems
│     Use for: Detailed skill profiles, assessments
│     Pattern: docs/components/SkillBlock.md
│
├─ Skill rating display
│  └─ MatchScore percentage={85}
│
└─ Assessment indicators
   └─ SkillTag/SkillBlock with assessment prop
      Values: SkillAssessment.Exceed/Meet/Below
```

**Quick Copy:**
```tsx
import { SkillTag, SkillBlock, SkillAssessment, Pill, PillType } from '@eightfold.ai/octuple';

// Simple tag
<Pill label="React" theme="blue" />

// Removable tags
{tags.map(tag => (
  <Pill key={tag} label={tag} type={PillType.closable} onClose={() => removeTag(tag)} />
))}

// Skill tag with assessment
<SkillTag
  label="JavaScript"
  assessment={SkillAssessment.Exceed}
  showLabelAssessmentIcon
  removable
  onRemove={handleRemove}
/>

// Complex skill block
<SkillBlock
  label="Project Management"
  assessment={SkillAssessment.Meet}
  endorsement={true}
  expandable
  expandedContent={<div>Detailed skill info</div>}
  menuItems={[
    { key: 'edit', children: 'Edit' },
    { key: 'delete', children: 'Delete' }
  ]}
/>
```

---

### 🔘 Need Toggle/Switch State?

```
What interaction type?
├─ Form toggle (on/off state)
│  └─ Switch checked={enabled} onChange={setEnabled}
│     Use for: Settings, feature flags
│
├─ Button with state (favorite, like, follow)
│  └─ Button toggle checked={state} onClick={toggle}
│     Props: toggle, checked, iconProps
│     Use for: Favorites, bookmarks, likes
│     Pattern: docs/components/ToggleButton.md
│
├─ Single selection from group
│  └─ RadioButton group
│
└─ Multiple selections
   └─ CheckBox or CheckBoxGroup
```

**Quick Copy:**
```tsx
import { Switch, Button, CheckBox } from '@eightfold.ai/octuple';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';

// Switch for settings
<Switch
  checked={enabled}
  onChange={(checked) => setEnabled(checked)}
  label="Enable notifications"
/>

// Toggle button for favorite
const [favorite, setFavorite] = React.useState(false);
<Button
  toggle
  checked={favorite}
  text={favorite ? 'Favorited' : 'Favorite'}
  iconProps={{ path: favorite ? mdiHeart : mdiHeartOutline }}
  onClick={() => setFavorite(!favorite)}
/>

// Checkbox
<CheckBox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} label="I agree" />
```

---

### 💡 Need Contextual Info/Tooltip?

```
What type of information?
├─ Simple tooltip (hover info)
│  └─ Tooltip content="Info text">
│     Props: content, placement
│     Pattern: docs/components/Tooltip.md
│
├─ Enhanced tooltip (controlled, clickable)
│  └─ Popup content={...} showPopup={callback}
│     Props: closeOnPopupClick, popupOnKeydown, theme
│     Use for: Interactive tooltips, popovers
│     Pattern: docs/components/Popup.md
│
├─ Rich content overlay
│  └─ Popup with JSX content
│     Can contain buttons, forms, etc.
│
└─ Dropdown menu
   └─ Dropdown overlay={menu} trigger="click"
```

**Quick Copy:**
```tsx
import { Tooltip, Popup, PopupTheme } from '@eightfold.ai/octuple';

// Simple tooltip
<Tooltip content="This is helpful info">
  <Button text="Hover me" />
</Tooltip>

// Enhanced popup
<Popup
  content={<div><h4>Title</h4><p>Content</p></div>}
  theme={PopupTheme.light}
  closeOnPopupClick
>
  <Button text="Click me" />
</Popup>

// Controlled popup
const [visible, setVisible] = React.useState(false);
<Popup
  content="Popup content"
  visible={visible}
  onVisibleChange={setVisible}
  showPopup={(show) => {
    console.log('Visibility changing:', show);
    return show; // Return true to allow, false to prevent
  }}
>
  <Button text="Toggle" />
</Popup>
```

---

## 🎨 Pattern Selection Decision Trees

### Need a Form?

```
What complexity?
├─ Simple login (2-3 fields)
│  └─ Form + TextInput + Button
│     Copy: docs/verified-octuple-examples.md#Form
│
├─ Registration (5-10 fields)
│  └─ Form + validation + field dependencies
│     Pattern: docs/patterns/form-validation.md
│
├─ Multi-step form
│  └─ Stepper + Form for each step
│     Pattern: docs/patterns/stepper-workflow.md
│
└─ Complex form (10+ fields, grouped)
   └─ Form + Row/Col + Card sections
      Pattern: docs/patterns/form-validation.md
```

---

### Need a Dashboard?

```
What to display?
├─ Metrics only
│  └─ Row/Col grid with metric Cards
│     Pattern: docs/patterns/dashboard-layout.md
│
├─ Metrics + charts
│  └─ Metrics Row + Chart Row/Col
│     Pattern: docs/patterns/dashboard-layout.md
│
└─ Metrics + data table
   └─ Metrics Row + Table
      Pattern: docs/patterns/data-table.md
```

---

### Need a User Profile?

```
What features?
├─ View-only profile
│  └─ Avatar + Card sections
│
├─ Profile with tabs
│  └─ Avatar + Tabs + Form
│     Pattern: docs/patterns/user-profile.md
│
└─ Editable profile
   └─ Avatar + Form + Button actions
      Pattern: docs/patterns/user-profile.md
```

---

### Need a Data View?

```
What display?
├─ List view
│  └─ Row/Col map() or Table
│
├─ Grid view
│  └─ Row/Col with Card grid
│     Pattern: docs/patterns/card-grid.md
│
└─ Table with actions
   └─ Table with render columns
      Pattern: docs/patterns/data-table.md
```

---

## ⚡ Quick Component Lookup Tables

### Form Components

| Need | Component | Key Props | Example |
|------|-----------|-----------|---------|
| Text input | `TextInput` | `value`, `onChange`, `placeholder` | `<TextInput placeholder="Name" />` |
| Password | `TextInput` | `htmlType="password"` | `<TextInput htmlType="password" />` |
| Email | `TextInput` | `htmlType="email"` | `<TextInput htmlType="email" />` |
| Numbers | `TextInput` | `numbersOnly={true}` | `<TextInput numbersOnly />` |
| Multi-line | `TextArea` | `rows`, `value`, `onChange` | `<TextArea rows={4} />` |
| Dropdown | `Select` | `options`, `value`, `onChange` | `<Select options={[...]} />` |
| Multi-select | `Select` | `multiple={true}` | `<Select multiple />` |
| Checkbox | `CheckBox` | `checked`, `onChange`, `label` | `<CheckBox label="Agree" />` |
| Radio | `RadioButton` | `checked`, `value` | `<RadioButton value="a" />` |
| Date | `DatePicker` | `value`, `onChange` | `<DatePicker />` |
| Slider | `Slider` | `min`, `max`, `value` | `<Slider min={0} max={100} />` |

---

### Button Variants

| Variant | Enum | Use Case | Example |
|---------|------|----------|---------|
| Primary | `ButtonVariant.Primary` | Main action (highest emphasis, one per screen) | Save, Submit, Create |
| Secondary | `ButtonVariant.Secondary` | Second level emphasis | Download, Export |
| Default | `ButtonVariant.Default` | Themed tertiary action | Cancel, Back |
| Neutral | `ButtonVariant.Neutral` | Light gray, subtle tertiary (place anywhere) | View Details, Learn More |
| SystemUI | `ButtonVariant.SystemUI` | White background, least emphasis | With `disruptive` for delete |

**Common Props:**
- `text`: string (button label)
- `variant`: ButtonVariant enum
- `size`: ButtonSize enum (Small, Medium, Large, Flex)
- `iconProps`: { path: IconName }
- `alignIcon`: 'left' | 'right'
- `loading`: boolean
- `disabled`: boolean
- `htmlType`: 'button' | 'submit' | 'reset'

---

### Layout Components

| Need | Component | Key Props | Critical Notes |
|------|-----------|-----------|----------------|
| Page layout | `Layout` | `style={{ minHeight }}` | Top-level container |
| Header | `Layout.Header` | `style={{ padding }}` | Fixed or scrollable |
| Sidebar | `Layout.Aside` | `width={240}` | NOT `Layout.Sider` |
| Content | `Layout.Content` | `style={{ padding }}` | Main content area |
| Footer | `Layout.Footer` | `style={{ textAlign }}` | Optional |
| Grid row | `Row` | `gutter`, `style={{ flex }}` | **Needs explicit flex!** |
| Grid column | `Col` | `span` (1-24), `style={{ flex }}` | **Needs flex sizing!** |

**⚠️ CRITICAL: Row/Col Flex Styling**

Row/Col will STACK VERTICALLY without explicit flex styles:

```tsx
// ✅ CORRECT
<Row gutter={24} style={{ display: 'flex', flexWrap: 'nowrap' }}>
  <Col span={16} style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}>...</Col>
  <Col span={8} style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>...</Col>
</Row>

// ❌ WRONG (will stack!)
<Row gutter={24}>
  <Col span={16}>...</Col>
  <Col span={8}>...</Col>
</Row>
```

---

### Navigation Components

| Component | Key Props | Important Notes |
|-----------|-----------|-----------------|
| `Menu` | `items`, `mode` | Uses items array (NOT Menu.Item children) |
| `Breadcrumb` | `links` | Each link: `{ url, children }` (NOT text/label) |
| `Tabs` | `value`, `onChange` | Uses Tab children (NOT items array) |
| `Tab` | `value`, `label`, `icon` | Child of Tabs |
| `Stepper` | `activeStepIndex`, `steps` | For multi-step processes |
| `Pagination` | `current`, `total`, `pageSize` | For paginated data |

---

### Display Components

| Component | Key Props | Important Notes |
|-----------|-----------|-----------------|
| `Card` | `title`, `actions`, children | Container for content |
| `Avatar` | `size`, `type`, `src` | **size is STRING** ("40px" not 40) |
| `Badge` | `count`, `dot` | Can wrap other components |
| `Pill` | `label`, `type`, `theme` | For tags and labels |
| `Table` | `dataSource`, `columns`, `rowKey` | For tabular data |
| `Modal` | `visible`, `onClose`, `title` | Blocking dialog |
| `Drawer` | `visible`, `placement`, `onClose` | Side panel |
| `Tooltip` | `content`, children | Hover info |

---

## 📚 Common Use Case Index

### Use Case: Login Form

**Pattern:** docs/patterns/form-validation.md  
**Components:** Form, Form.Item, TextInput, Button, CheckBox  
**Quick Start:**

```tsx
import { Form, TextInput, Button, ButtonVariant, CheckBox } from '@eightfold.ai/octuple';

const [form] = Form.useForm();

<Form form={form} onFinish={handleLogin} layout="vertical">
  <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
    <TextInput placeholder="your.email@example.com" />
  </Form.Item>
  <Form.Item name="password" label="Password" rules={[{ required: true }]}>
    <TextInput htmlType="password" />
  </Form.Item>
  <Form.Item name="remember" valuePropName="checked">
    <CheckBox label="Remember me" />
  </Form.Item>
  <Form.Item>
    <Button htmlType="submit" text="Sign In" variant={ButtonVariant.Primary} buttonWidth="fill" />
  </Form.Item>
</Form>
```

---

### Use Case: User Profile Page

**Pattern:** docs/patterns/user-profile.md  
**Components:** Layout, Avatar, Tabs, Tab, Card, Form, Button  
**Quick Start:** See docs/patterns/user-profile.md

---

### Use Case: Data Table with Actions

**Pattern:** docs/patterns/data-table.md  
**Components:** Table, Button, Modal  
**Quick Start:**

```tsx
import { Table, Button } from '@eightfold.ai/octuple';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <>
        <Button text="Edit" onClick={() => handleEdit(record)} size={ButtonSize.Small} />
        <Button text="Delete" onClick={() => handleDelete(record)} size={ButtonSize.Small} />
      </>
    ),
  },
];

<Table dataSource={users} columns={columns} rowKey="id" />
```

---

### Use Case: Dashboard

**Pattern:** docs/patterns/dashboard-layout.md  
**Components:** Row, Col, Card  
**Quick Start:** See docs/patterns/dashboard-layout.md

---

### Use Case: Multi-Step Form

**Pattern:** docs/patterns/stepper-workflow.md  
**Components:** Stepper, Form, Button  
**Quick Start:** See docs/patterns/stepper-workflow.md

---

### Use Case: Responsive Card Grid

**Pattern:** docs/patterns/card-grid.md  
**Components:** Row, Col, Card  
**Quick Start:**

```tsx
import { Row, Col, Card } from '@eightfold.ai/octuple';

<Row gutter={[16, 16]}>
  {items.map(item => (
    <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
      <Card title={item.title}>
        {item.content}
      </Card>
    </Col>
  ))}
</Row>
```

---

### Use Case: Page with Sidebar Navigation

**Pattern:** docs/patterns/navigation.md  
**Components:** Layout, Layout.Aside, Layout.Header, Layout.Content, Menu, Breadcrumb  
**Quick Start:** See docs/patterns/navigation.md

---

## 🐛 Troubleshooting Guide

### ❌ Problem: Blank Page

**Symptoms:** White screen, no content, no errors visible

**Solutions:**
1. ✅ Check ErrorBoundary is rendering
   - Verify `main.tsx` has `<ErrorBoundary><App /></ErrorBoundary>`
2. ✅ Check browser console (F12)
   - Look for red errors
   - Common: "Cannot read properties of undefined"
3. ✅ Verify component imports
   - Use `TextInput` NOT `Input`
   - Use `Layout.Aside` NOT `Layout.Sider`
4. ✅ Check prop types match
   - Run `npm run check-props [ComponentName]`
5. ✅ Verify data exists
   - Add optional chaining: `data?.map()` instead of `data.map()`

**Quick Fix:**
```tsx
// Add safety checks
{data?.map((item) => <div key={item.id}>{item.name}</div>)}
```

---

### ❌ Problem: Component Not Rendering

**Symptoms:** Component missing, console errors, TypeScript errors

**Solutions:**
1. ✅ Verify component exists
   - Check `docs/octuple-api-reference.md`
   - Some components don't exist (Input, Tag, Sider)
2. ✅ Check prop names
   - Run `npm run check-props [ComponentName]`
   - Example: Breadcrumb uses `links` not `items`
3. ✅ Use enums, not strings
   - `ButtonVariant.Primary` NOT `"primary"`
   - Import enums from Octuple
4. ✅ Cast icon types
   - `mdiHome as IconName`
5. ✅ Check component guide
   - See `docs/components/[ComponentName].md`

**Quick Fix:**
```tsx
// ❌ WRONG
<Button variant="primary" />

// ✅ CORRECT
import { Button, ButtonVariant } from '@eightfold.ai/octuple';
<Button variant={ButtonVariant.Primary} />
```

---

### ❌ Problem: Layout Columns Stacking Vertically

**Symptoms:** Two columns appear one above the other instead of side-by-side

**Solutions:**
1. ✅ Add explicit flex styles to Row
   - `style={{ display: 'flex', flexWrap: 'nowrap' }}`
2. ✅ Add flex sizing to each Col
   - `style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}`
3. ✅ Verify span adds to 24 or less
   - span={16} + span={8} = 24 ✅
   - span={16} + span={16} = 32 ❌
4. ✅ Check parent container width
   - Parent must be wide enough for columns

**Quick Fix:**
```tsx
// ✅ CORRECT
<Row gutter={24} style={{ display: 'flex', flexWrap: 'nowrap' }}>
  <Col span={16} style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}>
    Main Content
  </Col>
  <Col span={8} style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
    Sidebar
  </Col>
</Row>
```

**Reference:** docs/patterns/two-column-layout.md

---

### ❌ Problem: TypeScript Errors

**Symptoms:** Red squiggly lines, build errors, type mismatch

**Solutions:**
1. ✅ Import enums
   - `ButtonVariant`, `ButtonSize`, `TabVariant`, etc.
   - Import from `@eightfold.ai/octuple`
2. ✅ Cast icon paths
   - `mdiHome as IconName`
   - Import `IconName` from `@mdi/react`
3. ✅ Use string for Avatar size
   - `size="80px"` NOT `size={80}`
4. ✅ Check interface names
   - Run `npm run check-props [ComponentName]`
5. ✅ Verify prop types
   - Read `.d.ts` files in node_modules

**Quick Fix:**
```tsx
// ❌ WRONG
<Button variant="primary" size="small" />
<Avatar size={40} />
<Button iconProps={{ path: mdiHome }} />

// ✅ CORRECT
import { Button, ButtonVariant, ButtonSize, Avatar } from '@eightfold.ai/octuple';
import { IconName } from '@mdi/react';
import { mdiHome } from '@mdi/js';

<Button variant={ButtonVariant.Primary} size={ButtonSize.Small} />
<Avatar size="40px" />
<Button iconProps={{ path: mdiHome as IconName }} />
```

---

### ❌ Problem: Form Not Submitting

**Symptoms:** Button click does nothing, no validation

**Solutions:**
1. ✅ Use Form.useForm()
   - `const [form] = Form.useForm();`
   - Pass to Form: `<Form form={form}>`
2. ✅ Use Form.Item wrapper
   - All inputs must be wrapped: `<Form.Item><TextInput /></Form.Item>`
3. ✅ Set name prop
   - Each Form.Item needs `name` prop
4. ✅ Use htmlType="submit"
   - Submit button needs `htmlType="submit"`
5. ✅ Use onFinish handler
   - Form needs `onFinish={handleSubmit}`

**Quick Fix:**
```tsx
// ✅ CORRECT
import { Form, TextInput, Button, ButtonVariant } from '@eightfold.ai/octuple';

const [form] = Form.useForm();

<Form form={form} onFinish={handleSubmit} layout="vertical">
  <Form.Item name="username" label="Username" rules={[{ required: true }]}>
    <TextInput />
  </Form.Item>
  <Form.Item>
    <Button htmlType="submit" text="Submit" variant={ButtonVariant.Primary} />
  </Form.Item>
</Form>
```

**Reference:** docs/patterns/form-validation.md

---

### ❌ Problem: Icons Not Showing

**Symptoms:** Empty space, broken icon, console error

**Solutions:**
1. ✅ Install MDI packages
   - `npm install @mdi/js @mdi/react`
2. ✅ Import Icon component
   - `import Icon from '@mdi/react';`
3. ✅ Import icon paths
   - `import { mdiHome, mdiAccount } from '@mdi/js';`
4. ✅ Cast to IconName for Octuple components
   - `iconProps={{ path: mdiHome as IconName }}`
5. ✅ Use correct size
   - Size is number (0.6-1.2 typical)

**Quick Fix:**
```tsx
// ✅ CORRECT
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { IconName } from '@mdi/react';
import { Button } from '@eightfold.ai/octuple';

// Standalone icon
<Icon path={mdiHome} size={1} />

// In Button
<Button iconProps={{ path: mdiHome as IconName }} text="Home" />
```

**Reference:** docs/verified-octuple-examples.md#Icons

---

### ❌ Problem: Menu Items Not Visible

**Symptoms:** Empty menu, no items showing

**Solutions:**
1. ✅ Use items array API
   - NOT Menu.Item children
2. ✅ Each item needs key, label
   - Optional: iconProps, onClick
3. ✅ Verify items array structure
   - `[{ key: 'home', label: 'Home' }]`
4. ✅ Check styling
   - Add background color if needed

**Quick Fix:**
```tsx
// ✅ CORRECT
import { Menu } from '@eightfold.ai/octuple';
import { mdiHome } from '@mdi/js';
import { IconName } from '@mdi/react';

const menuItems = [
  { 
    key: 'home', 
    label: 'Home',
    iconProps: { path: mdiHome as IconName }
  }
];

<Menu items={menuItems} mode="inline" />
```

**Reference:** docs/components/Menu.md

---

## ✅ Pre-Flight Verification Checklist

**Before generating ANY code, verify:**

### Component Verification
- [ ] Component exists in `docs/octuple-api-reference.md`
- [ ] Checked TypeScript types: `npm run check-props [ComponentName]`
- [ ] Read component guide: `docs/components/[ComponentName].md`
- [ ] Checked verified examples: `docs/verified-octuple-examples.md`

### TypeScript Verification
- [ ] Using enums for `variant`, `size`, etc. (NOT strings)
- [ ] MDI icons cast to `IconName` type
- [ ] Avatar size is STRING with unit ("40px" NOT 40)
- [ ] Imported all necessary enums

### Component Name Verification
- [ ] Using `TextInput` (NOT `Input`)
- [ ] Using `TextArea` (NOT `Input.TextArea`)
- [ ] Using `Badge` or `Pill` (NOT `Tag`)
- [ ] Using `Layout.Aside` (NOT `Layout.Sider`)
- [ ] Using `CheckBox` (NOT `Checkbox`)

### Layout Verification
- [ ] Two-column layouts have explicit flex styles on Row
- [ ] Col components have flex sizing styles
- [ ] Row spans add up to 24 or less
- [ ] Parent containers have adequate width

### Form Verification
- [ ] Form uses `Form.useForm()` hook
- [ ] All inputs wrapped in `Form.Item`
- [ ] Each Form.Item has `name` prop
- [ ] Submit button has `htmlType="submit"`
- [ ] Form has `onFinish` handler

### General Verification
- [ ] No raw HTML elements (`<button>`, `<input>`, `<div className="...">`)
- [ ] No Tailwind/Bootstrap classes (`p-4`, `flex`, `d-flex`)
- [ ] No emojis (🏠, 👤) - use MDI icons
- [ ] Checked pattern library for similar use case

---

## 🚨 COMMON MISTAKES AND FIXES (Lessons Learned)

These mistakes were made repeatedly across 3 example pages. Learn from them!

### Circular Icon-Only Buttons

```typescript
// ❌ WRONG - Never force dimensions
<Button style={{ width: '36px', height: '36px', borderRadius: '50%' }} />

// ✅ CORRECT - Use ButtonShape.Round
import { Button, ButtonShape, ButtonSize } from '@eightfold.ai/octuple';
<Button
  iconProps={{ path: mdiPencil as unknown as IconName }}
  size={ButtonSize.Medium}  // Small=28px, Medium=36px, Large=44px
  shape={ButtonShape.Round}
  ariaLabel="Edit"
/>
```

### Icons - MDI Only, No Emojis

```typescript
// ❌ WRONG
<span>🏠 Home</span>

// ✅ CORRECT
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
<Icon path={mdiHome} size={0.8} />
```

### Toggle/Switch Component

```typescript
// ❌ WRONG - Custom toggle
<div onClick={() => setOn(!on)}><div className={on ? 'on' : 'off'} /></div>

// ✅ CORRECT - Octuple CheckBox with toggle
import { CheckBox } from '@eightfold.ai/octuple';
<CheckBox toggle checked={on} onChange={(e) => setOn(e.target.checked)} label="Label" />
```

### Skill Tags

```typescript
// ❌ WRONG - Custom div
<div style={{ padding: '4px 8px', border: '1px solid #ccc' }}>Skill</div>

// ✅ CORRECT - Octuple SkillTag
import { SkillTag } from '@eightfold.ai/octuple';
<SkillTag label="Machine Learning" />
```

### Row/Col Horizontal Layout

```typescript
// ❌ WRONG - Columns stack vertically
<Row gutter={24}>
  <Col span={18}>Left</Col>
  <Col span={6}>Right</Col>
</Row>

// ✅ CORRECT - Add explicit flex
<Row gutter={24} style={{ display: 'flex', flexWrap: 'nowrap' }}>
  <Col span={18} style={{ flex: '0 0 75%', maxWidth: '75%' }}>Left</Col>
  <Col span={6} style={{ flex: '0 0 25%', maxWidth: '25%' }}>Right</Col>
</Row>
```

### Required CSS Overrides (in src/index.css)

```css
/* Gilroy font for all Octuple components */
* {
  font-family: 'Gilroy', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
[class*="module_"] {
  font-family: 'Gilroy', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif !important;
}

/* Cards full width */
[class*="card-module_card"] {
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
}

/* Tab indicator in 80px headers */
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

---

## 📖 Quick Links

### Essential Documentation
- **Component Guides:** [`docs/components/`](./components/) - Complete API reference for all 18 components
- **Pattern Library:** [`docs/patterns/`](./patterns/) - 8 real-world UI patterns
- **Verified Examples:** [`docs/verified-octuple-examples.md`](./verified-octuple-examples.md) - Tested code snippets
- **Important Rules:** [`docs/IMPORTANT-AI-RULES.md`](./IMPORTANT-AI-RULES.md) - Critical mistakes to avoid
- **API Reference:** [`docs/octuple-api-reference.md`](./octuple-api-reference.md) - Component exports list

### Tools & Scripts
- **Check Props:** `npm run check-props [ComponentName]` - View TypeScript interface
- **Extract APIs:** `npm run extract-apis` - Update API reference
- **Check Version:** `npm run check-octuple-version` - Verify version match

### Confluence Documentation
- **All Docs:** [`docs/confluence/`](./confluence/) - Original Confluence documentation
- **Doc Status:** [`docs/CONFLUENCE-INTEGRATION-STATUS.md`](./CONFLUENCE-INTEGRATION-STATUS.md) - Integration progress

### Design & Accessibility
- **Design Guidelines:** [`docs/design-guidelines.md`](./design-guidelines.md) - Typography, spacing, colors
- **Accessibility:** [`docs/accessibility.md`](./accessibility.md) - WCAG 2.1 AA compliance

### Maintenance
- **Maintenance Guide:** [`docs/MAINTENANCE.md`](./MAINTENANCE.md) - How to maintain docs
- **Contributing:** [`docs/CONTRIBUTING-TO-DOCS.md`](./CONTRIBUTING-TO-DOCS.md) - How to contribute

---

## 🎯 AI Agent Workflow

### Recommended Workflow for AI Agents

```
1. Understand requirement
   ↓
2. Check Pattern Library (docs/patterns/)
   ├─ Pattern exists? → Use pattern
   └─ No pattern? → Continue
   ↓
3. Check Verified Examples (docs/verified-octuple-examples.md)
   ├─ Example exists? → Copy example
   └─ No example? → Continue
   ↓
4. Use Decision Trees (this file)
   └─ Select appropriate components
   ↓
5. Check Component Guides (docs/components/)
   └─ Read full API and usage
   ↓
6. Verify TypeScript Types
   └─ npm run check-props [ComponentName]
   ↓
7. Build incrementally
   ├─ Add one component at a time
   ├─ Test after each addition
   └─ Check browser console
   ↓
8. Verify result
   ├─ Functionality works
   ├─ No console errors
   ├─ TypeScript compiles
   └─ Matches requirements
```

---

## 🎓 AI Agent Best Practices

### DO ✅
1. **Always check patterns first** - Don't reinvent the wheel
2. **Copy verified examples exactly** - They're tested and working
3. **Use enums, never strings** - TypeScript will thank you
4. **Add explicit flex to Row/Col** - Prevents layout bugs
5. **Import MDI icons correctly** - Cast to IconName
6. **Test incrementally** - Add one component at a time
7. **Check console** - Errors are your friend
8. **Read component guides** - They have all the details

### DON'T ❌
1. **Never guess component APIs** - Always verify
2. **Never use raw HTML** - Use Octuple components
3. **Never use utility classes** - No Tailwind/Bootstrap
4. **Never use emojis for icons** - Use MDI
5. **Never skip ErrorBoundary** - Catch errors gracefully
6. **Never use wrong component names** - Input→TextInput, Tag→Badge, etc.
7. **Never use string literals for enums** - "primary"→ButtonVariant.Primary
8. **Never forget Form.Item** - All form fields need wrapper

---

## 📊 Component Coverage

**Fully Documented Components (18):**
- Avatar, Badge, Breadcrumb, Button, Card, CheckBox, DatePicker, Dropdown, Form, Input (TextInput/TextArea), Layout, Menu, Pagination, Pill, Select, Stepper, Table, Tabs

**Documented Patterns (8):**
- Form Validation, Two-Column Layout, Navigation, Card Grid, Stepper Workflow, Data Table, User Profile, Dashboard Layout

---

## 🎯 Goal

**Zero guessing, 100% verified components and patterns.**

Every example in this guide is:
- ✅ Verified against Confluence documentation
- ✅ Tested with TypeScript
- ✅ Using real Octuple APIs
- ✅ Following best practices
- ✅ Accessible and maintainable

---

**Last Updated:** November 20, 2024  
**Next Update:** After Phase 6 (Design Guidelines)

**Need help?** Check the [Troubleshooting Guide](#-troubleshooting-guide) or [Component Guides](./components/).
