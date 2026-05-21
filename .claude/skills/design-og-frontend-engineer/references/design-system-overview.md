# Octuple Design System - AI Coding Agent Reference

**Last Updated:** November 20, 2024  
**Total Components:** 72 (18 core + 54 advanced)  
**Status:** Complete with all Octuple components

This document serves as a comprehensive guide for AI coding agents to use the Octuple design system correctly. Always refer to this guide before generating UI components.

**Note:** For detailed component guides with complete API references and examples, see:
- `docs/components/[ComponentName].md` for detailed guides
- `docs/ai-quick-reference.md` for quick decision trees
- `docs/verified-octuple-examples.md` for working examples

## Core Principles

1. **Always import from Octuple**: `import { ComponentName } from '@eightfold.ai/octuple';`
2. **Never use raw HTML elements** when an Octuple component exists
3. **Never use CSS frameworks** like Tailwind, Bootstrap, or custom CSS classes
4. **Use TypeScript** for all component implementations
5. **Follow Octuple's prop patterns** for styling and behavior

## Component Reference

### Accordion

**Import:** `import { Accordion } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Accordion>
  <Accordion.Panel header="Panel 1" key="1">
    Content for panel 1
  </Accordion.Panel>
  <Accordion.Panel header="Panel 2" key="2">
    Content for panel 2
  </Accordion.Panel>
</Accordion>
```

**Common Props:**
- `defaultActiveKey?: string | string[]` - Default active panel key(s)
- `bordered?: boolean` - Show border
- `expandIconPosition?: 'left' | 'right'` - Position of expand icon

---

### Avatar

**Import:** `import { Avatar } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Avatar src="image-url.jpg" alt="User Name" />
<Avatar>UN</Avatar>
<Avatar icon={<UserIcon />} />
```

**Common Props:**
- `src?: string` - Image source
- `alt?: string` - Alt text
- `size?: 'large' | 'medium' | 'small'` - Avatar size
- `shape?: 'circle' | 'square'` - Avatar shape
- `icon?: React.ReactNode` - Icon element

---

### Badge

**Import:** `import { Badge } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Badge count={5}>
  <Avatar shape="square" />
</Badge>
<Badge dot>
  <Icon type="notification" />
</Badge>
```

**Common Props:**
- `count?: number` - Badge count
- `dot?: boolean` - Display as dot
- `showZero?: boolean` - Show badge when count is zero
- `status?: 'success' | 'processing' | 'default' | 'error' | 'warning'` - Badge status

---

### Breadcrumb

**Import:** `import { Breadcrumb } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Breadcrumb>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item>Application</Breadcrumb.Item>
  <Breadcrumb.Item>Settings</Breadcrumb.Item>
</Breadcrumb>
```

**Common Props:**
- `separator?: React.ReactNode` - Custom separator

---

### Button

**Import:** `import { Button } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Button text="Click Me" onClick={handleClick} />
<Button text="Primary" variant="primary" />
<Button text="Secondary" variant="secondary" />
<Button text="Disabled" disabled />
```

**Common Props:**
- `text: string` - Button label (required)
- `variant?: 'primary' | 'secondary' | 'default' | 'neutral' | 'systemui'` - Button style variant
  - `primary` - Highest emphasis (one per screen recommended)
  - `secondary` - Second level emphasis
  - `default` - Themed tertiary action
  - `neutral` - Light gray, subtle tertiary (place anywhere)
  - `systemui` - White background, least emphasis
- `size?: 'large' | 'medium' | 'small' | 'flex'` - Button size
- `onClick?: () => void` - Click handler
- `disabled?: boolean` - Disable button
- `htmlType?: 'button' | 'submit' | 'reset'` - HTML button type
- `iconProps?: { path: IconName }` - Icon configuration
- `loading?: boolean` - Show loading state
- `disruptive?: boolean` - Red/warning style for destructive actions

**Anti-patterns:**
- ❌ `<button className="btn">Click</button>` - Never use raw HTML button
- ❌ `<button class="bg-blue-500">Click</button>` - Never use Tailwind classes

---

### Card

**Import:** `import { Card } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Card title="Card Title">
  <p>Card content goes here</p>
</Card>

<Card 
  title="Card with Actions"
  actions={[<Button text="Action 1" />, <Button text="Action 2" />]}
>
  Content
</Card>
```

**Common Props:**
- `title?: string | React.ReactNode` - Card title
- `bordered?: boolean` - Show border
- `hoverable?: boolean` - Lift card on hover
- `actions?: React.ReactNode[]` - Action buttons
- `cover?: React.ReactNode` - Cover image/content
- `loading?: boolean` - Show loading state

---

### Checkbox

**Import:** `import { Checkbox } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Checkbox checked={isChecked} onChange={handleChange}>
  Accept terms
</Checkbox>

<Checkbox.Group 
  options={['Option 1', 'Option 2', 'Option 3']}
  value={selectedValues}
  onChange={handleGroupChange}
/>
```

**Common Props:**
- `checked?: boolean` - Checked state
- `defaultChecked?: boolean` - Default checked state
- `disabled?: boolean` - Disable checkbox
- `onChange?: (e: CheckboxChangeEvent) => void` - Change handler
- `indeterminate?: boolean` - Indeterminate state

---

### DatePicker

**Import:** `import { DatePicker } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<DatePicker 
  value={selectedDate}
  onChange={handleDateChange}
  placeholder="Select date"
/>

<DatePicker.RangePicker 
  value={dateRange}
  onChange={handleRangeChange}
/>
```

**Common Props:**
- `value?: Date` - Selected date
- `defaultValue?: Date` - Default date
- `onChange?: (date: Date) => void` - Change handler
- `format?: string` - Date format
- `disabled?: boolean` - Disable picker
- `placeholder?: string` - Placeholder text

---

### Dropdown

**Import:** `import { Dropdown } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Dropdown menu={menuItems} trigger={['click']}>
  <Button text="Dropdown" />
</Dropdown>
```

**Common Props:**
- `menu?: MenuProps` - Menu configuration
- `trigger?: ('click' | 'hover')[]` - Trigger method
- `placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'`
- `disabled?: boolean` - Disable dropdown

---

### FadeIn

**Import:** `import { FadeIn } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<FadeIn duration={300} delay={0}>
  <div>Content that fades in</div>
</FadeIn>

// Sequential fade-in
{items.map((item, index) => (
  <FadeIn key={index} delay={index * 100} duration={300}>
    <div>{item}</div>
  </FadeIn>
))}
```

**Common Props:**
- `children: ReactNode` - Content to animate
- `duration?: number` - Animation duration in ms (default: 300)
- `delay?: number` - Delay before animation starts in ms
- `disabled?: boolean` - Disable animation

**When to use:**
- Content loading animations
- Sequential list item appearances
- Modal/Card entrance animations

**See:** `docs/components/FadeIn.md`

---

### Form

**Import:** `import { Form } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Form onFinish={handleSubmit} layout="vertical">
  <Form.Item label="Username" name="username" rules={[{ required: true }]}>
    <Input placeholder="Enter username" />
  </Form.Item>
  <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
    <Input placeholder="Enter email" />
  </Form.Item>
  <Form.Item>
    <Button htmlType="submit" text="Submit" />
  </Form.Item>
</Form>
```

**Common Props:**
- `onFinish?: (values: any) => void` - Submit handler
- `onFinishFailed?: (errorInfo: any) => void` - Error handler
- `layout?: 'horizontal' | 'vertical' | 'inline'` - Form layout
- `initialValues?: object` - Initial form values
- `form?: FormInstance` - Form instance

**Form.Item Props:**
- `label?: string` - Field label
- `name?: string` - Field name
- `rules?: Rule[]` - Validation rules
- `required?: boolean` - Required field
- `help?: string` - Help text

---

### Icon

**Import:** `import { Icon } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Icon path={IconName.mdiAccount} />
<Icon path={IconName.mdiClose} size="large" />
```

**Common Props:**
- `path: IconName` - Icon path (required)
- `size?: 'small' | 'medium' | 'large'` - Icon size
- `color?: string` - Icon color
- `rotate?: number` - Rotation angle
- `spin?: boolean` - Spin animation

---

### Input

**Import:** `import { Input } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Input 
  placeholder="Enter text"
  value={inputValue}
  onChange={handleChange}
/>

<Input.TextArea 
  placeholder="Enter description"
  rows={4}
/>

<Input.Password placeholder="Enter password" />

<Input.Search 
  placeholder="Search..."
  onSearch={handleSearch}
/>
```

**Common Props:**
- `value?: string` - Input value
- `defaultValue?: string` - Default value
- `placeholder?: string` - Placeholder text
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` - Change handler
- `disabled?: boolean` - Disable input
- `maxLength?: number` - Max length
- `prefix?: React.ReactNode` - Prefix icon/element
- `suffix?: React.ReactNode` - Suffix icon/element
- `type?: string` - Input type

**Anti-patterns:**
- ❌ `<input className="form-control" />` - Never use raw HTML input
- ❌ `<input class="border rounded p-2" />` - Never use custom CSS classes

---

### Label

**Import:** `import { Label } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Label text="Field Label" />
<Label text="Required Field" required />
```

**Common Props:**
- `text: string` - Label text
- `required?: boolean` - Show required indicator
- `htmlFor?: string` - Associated input ID

---

### Link

**Import:** `import { Link } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Link href="https://example.com" target="_blank">
  External Link
</Link>
<Link href="/internal" variant="primary">
  Internal Link
</Link>
```

**Common Props:**
- `href: string` - Link URL
- `target?: '_blank' | '_self' | '_parent' | '_top'` - Link target
- `variant?: 'primary' | 'secondary' | 'default'` - Link style
- `disabled?: boolean` - Disable link

---

### List

**Import:** `import { List } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<List
  dataSource={items}
  renderItem={(item) => (
    <List.Item>
      {item.title}
    </List.Item>
  )}
/>
```

**Common Props:**
- `dataSource?: any[]` - Data array
- `renderItem?: (item: any) => React.ReactNode` - Render function
- `loading?: boolean` - Loading state
- `bordered?: boolean` - Show border
- `split?: boolean` - Show split line

---

### Menu

**Import:** `import { Menu } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Menu mode="horizontal" selectedKeys={[selectedKey]}>
  <Menu.Item key="1">Menu Item 1</Menu.Item>
  <Menu.Item key="2">Menu Item 2</Menu.Item>
  <Menu.SubMenu title="Submenu">
    <Menu.Item key="3">Submenu Item</Menu.Item>
  </Menu.SubMenu>
</Menu>
```

**Common Props:**
- `mode?: 'vertical' | 'horizontal' | 'inline'` - Menu mode
- `selectedKeys?: string[]` - Selected menu keys
- `defaultSelectedKeys?: string[]` - Default selected keys
- `onClick?: (info: MenuInfo) => void` - Click handler

---

### Modal

**Import:** `import { Modal } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Modal
  visible={isVisible}
  title="Modal Title"
  onOk={handleOk}
  onCancel={handleCancel}
>
  <p>Modal content goes here</p>
</Modal>
```

**Common Props:**
- `visible: boolean` - Modal visibility (required)
- `title?: string | React.ReactNode` - Modal title
- `onOk?: () => void` - OK button handler
- `onCancel?: () => void` - Cancel button handler
- `footer?: React.ReactNode` - Custom footer
- `width?: number | string` - Modal width
- `closable?: boolean` - Show close button
- `maskClosable?: boolean` - Click mask to close

---

### Pagination

**Import:** `import { Pagination } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Pagination
  current={currentPage}
  total={totalItems}
  pageSize={pageSize}
  onChange={handlePageChange}
/>
```

**Common Props:**
- `current?: number` - Current page
- `defaultCurrent?: number` - Default current page
- `total: number` - Total items
- `pageSize?: number` - Items per page
- `onChange?: (page: number, pageSize: number) => void` - Page change handler
- `showSizeChanger?: boolean` - Show page size changer

---

### Popup

**Import:** `import { Popup } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Popup content="Popup content">
  <Button text="Show Popup" />
</Popup>

// Controlled popup
const [visible, setVisible] = React.useState(false);
<Popup
  content={<div>Rich content</div>}
  visible={visible}
  onVisibleChange={setVisible}
  closeOnPopupClick
>
  <Button text="Toggle" />
</Popup>
```

**Common Props:**
- `content: React.ReactNode` - Popup content
- `visible?: boolean` - Controlled visibility
- `onVisibleChange?: (visible: boolean) => void` - Visibility change handler
- `closeOnPopupClick?: boolean` - Close when clicking inside popup
- `showPopup?: (show: boolean) => boolean` - Control show/hide behavior
- `popupStyle?: React.CSSProperties` - Custom popup style
- `theme?: 'light' | 'dark'` - Popup theme
- `size?: 'small' | 'medium' | 'large'` - Popup size

**When to use:**
- Enhanced tooltips with more control
- Interactive popover content
- Click-to-show information

**See:** `docs/components/Popup.md`, extends `Tooltip`

---

### Radio

**Import:** `import { Radio } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Radio.Group value={selectedValue} onChange={handleChange}>
  <Radio value="a">Option A</Radio>
  <Radio value="b">Option B</Radio>
  <Radio value="c">Option C</Radio>
</Radio.Group>
```

**Common Props:**
- `checked?: boolean` - Checked state
- `value?: any` - Radio value
- `disabled?: boolean` - Disable radio
- `onChange?: (e: RadioChangeEvent) => void` - Change handler

**Radio.Group Props:**
- `value?: any` - Selected value
- `onChange?: (e: RadioChangeEvent) => void` - Change handler
- `options?: string[] | Option[]` - Options array
- `disabled?: boolean` - Disable all radios

---

### Select

**Import:** `import { Select } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Select
  value={selectedValue}
  onChange={handleChange}
  placeholder="Select an option"
>
  <Select.Option value="option1">Option 1</Select.Option>
  <Select.Option value="option2">Option 2</Select.Option>
  <Select.Option value="option3">Option 3</Select.Option>
</Select>

<Select
  mode="multiple"
  value={selectedValues}
  onChange={handleMultipleChange}
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
/>
```

**Common Props:**
- `value?: any` - Selected value
- `defaultValue?: any` - Default value
- `onChange?: (value: any) => void` - Change handler
- `placeholder?: string` - Placeholder text
- `disabled?: boolean` - Disable select
- `mode?: 'multiple' | 'tags'` - Selection mode
- `options?: Option[]` - Options array
- `allowClear?: boolean` - Show clear button
- `showSearch?: boolean` - Enable search

---

### Skeleton

**Import:** `import { Skeleton, SkeletonVariant } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
// Basic skeleton
<Skeleton width={200} height={20} />

// Different variants
<Skeleton variant={SkeletonVariant.Text} width={200} />
<Skeleton variant={SkeletonVariant.Circular} width={40} height={40} />
<Skeleton variant={SkeletonVariant.Rectangular} width={300} height={200} />

// Card loading skeleton
<Card>
  <Skeleton variant={SkeletonVariant.Circular} width={40} height={40} />
  <Skeleton variant={SkeletonVariant.Text} width="60%" />
  <Skeleton variant={SkeletonVariant.Text} width="80%" />
</Card>
```

**Common Props:**
- `width?: number | string` - Skeleton width
- `height?: number | string` - Skeleton height
- `variant?: 'text' | 'circular' | 'rectangular' | 'rounded'` - Shape variant
- `animation?: 'wave' | 'pulse' | 'none'` - Animation type
- `fullWidth?: boolean` - Full width skeleton

**When to use:**
- Content loading placeholders
- Matching content shape during load
- Better UX than spinners for known layouts

**See:** `docs/components/Skeleton.md`

---

### Slider

**Import:** `import { Slider } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Slider
  value={sliderValue}
  onChange={handleSliderChange}
  min={0}
  max={100}
/>

<Slider range defaultValue={[20, 50]} />
```

**Common Props:**
- `value?: number | [number, number]` - Slider value
- `defaultValue?: number | [number, number]` - Default value
- `onChange?: (value: number | [number, number]) => void` - Change handler
- `min?: number` - Minimum value
- `max?: number` - Maximum value
- `step?: number` - Step value
- `range?: boolean` - Range slider
- `disabled?: boolean` - Disable slider

---

### SkillBlock

**Import:** `import { SkillBlock, SkillAssessment } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<SkillBlock
  label="JavaScript"
  content="Programming language"
  assessment={SkillAssessment.Exceed}
  showLabelAssessmentIcon
/>

// With endorsement
<SkillBlock
  label="Leadership"
  content="Team management"
  endorsement={true}
  endorseButtonProps={{
    text: 'Endorse',
    onClick: handleEndorse
  }}
/>

// Expandable with menu
<SkillBlock
  label="Project Management"
  expandable
  expandedContent={<div>Detailed info</div>}
  menuItems={[
    { key: 'edit', children: 'Edit' },
    { key: 'delete', children: 'Delete' }
  ]}
/>
```

**Common Props:**
- `label: string` - Skill name
- `content?: React.ReactNode` - Skill description
- `assessment?: SkillAssessment` - Skill level (Exceed/Meet/Below)
- `showLabelAssessmentIcon?: boolean` - Show assessment icon
- `endorsement?: boolean` - Is endorsed
- `endorseButtonProps?: ButtonProps` - Endorse button config
- `expandable?: boolean` - Can expand for more info
- `expandedContent?: React.ReactNode` - Content when expanded
- `menuItems?: MenuItemTypes[]` - Overflow menu items

**See:** `docs/components/SkillBlock.md`

---

### SkillTag

**Import:** `import { SkillTag, SkillAssessment } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<SkillTag label="React" />

// With assessment
<SkillTag
  label="TypeScript"
  assessment={SkillAssessment.Exceed}
  showLabelAssessmentIcon
/>

// Removable
<SkillTag
  label="Node.js"
  removable
  onRemove={handleRemove}
/>

// Clickable
<SkillTag
  label="Python"
  clickable
  onClick={handleClick}
/>
```

**Common Props:**
- `label: string` - Skill name
- `assessment?: SkillAssessment` - Skill level
- `showLabelAssessmentIcon?: boolean` - Show assessment icon
- `removable?: boolean` - Can be removed
- `onRemove?: (e) => void` - Remove handler
- `clickable?: boolean` - Is clickable
- `onClick?: (e) => void` - Click handler
- `size?: 'small' | 'medium' | 'large'` - Tag size

**See:** `docs/components/SkillTag.md`

---

### Spinner / Loader

**Import:** `import { Spinner } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Spinner />
<Spinner size="large" />
<Spinner tip="Loading..." />
```

**Common Props:**
- `size?: 'small' | 'medium' | 'large'` - Spinner size
- `tip?: string` - Loading text
- `spinning?: boolean` - Spinning state

---

### Stepper

**Import:** `import { Stepper } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Stepper current={currentStep} onChange={handleStepChange}>
  <Stepper.Step title="Step 1" description="Description" />
  <Stepper.Step title="Step 2" description="Description" />
  <Stepper.Step title="Step 3" description="Description" />
</Stepper>
```

**Common Props:**
- `current?: number` - Current step index
- `direction?: 'horizontal' | 'vertical'` - Stepper direction
- `status?: 'wait' | 'process' | 'finish' | 'error'` - Step status
- `onChange?: (current: number) => void` - Step change handler

---

### Step

**Import:** `import { Step } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
import { mdiAccount, mdiEmail, mdiCheck } from '@mdi/js';
import { IconName } from '@mdi/react';

// Used within Stepper
<Stepper current={1}>
  <Step
    title="Account"
    description="Create account"
    nodeIcon={mdiAccount as IconName}
  />
  <Step
    title="Email"
    description="Verify email"
    nodeIcon={mdiEmail as IconName}
  />
  <Step
    title="Complete"
    nodeIcon={mdiCheck as IconName}
  />
</Stepper>

// With status
<Stepper current={1}>
  <Step title="Completed" status={StepperValidationStatus.Success} />
  <Step title="Current" status={StepperValidationStatus.Warning} />
  <Step title="Failed" status={StepperValidationStatus.Error} />
</Stepper>
```

**Common Props:**
- `title?: string` - Step title
- `description?: string` - Step description
- `nodeIcon?: IconName` - Custom icon for step node
- `nodeAriaLabelText?: string` - Aria label for node button
- `status?: StepperValidationStatus` - Validation status
- `size?: 'small' | 'medium' | 'large'` - Step size

**When to use:**
- Custom icons for each step in Stepper/Timeline
- Validation status display per step
- Customized step appearance

**See:** `docs/components/Step.md`

---

### Switch

**Import:** `import { Switch } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Switch checked={isChecked} onChange={handleToggle} />
<Switch 
  checked={isChecked} 
  onChange={handleToggle}
  checkedChildren="ON"
  unCheckedChildren="OFF"
/>
```

**Common Props:**
- `checked?: boolean` - Switch state
- `defaultChecked?: boolean` - Default state
- `onChange?: (checked: boolean) => void` - Change handler
- `disabled?: boolean` - Disable switch
- `checkedChildren?: React.ReactNode` - Content when checked
- `unCheckedChildren?: React.ReactNode` - Content when unchecked

---

### Table

**Import:** `import { Table } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Table
  dataSource={data}
  columns={[
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button text="Edit" onClick={() => handleEdit(record)} />
      ),
    },
  ]}
/>
```

**Common Props:**
- `dataSource: any[]` - Data array (required)
- `columns: ColumnType[]` - Column definitions (required)
- `rowKey?: string | ((record: any) => string)` - Unique row key
- `pagination?: PaginationConfig | false` - Pagination config
- `loading?: boolean` - Loading state
- `onChange?: (pagination, filters, sorter) => void` - Change handler
- `onRow?: (record, index) => object` - Row event handlers

**Column Props:**
- `title: string | React.ReactNode` - Column title
- `dataIndex: string` - Data field name
- `key: string` - Unique key
- `render?: (value, record, index) => React.ReactNode` - Custom render
- `sorter?: boolean | function` - Sorting
- `filters?: Filter[]` - Filter options
- `width?: number | string` - Column width

---

### Tabs

**Import:** `import { Tabs } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Tabs activeKey={activeTab} onChange={handleTabChange}>
  <Tabs.TabPane tab="Tab 1" key="1">
    Content of Tab 1
  </Tabs.TabPane>
  <Tabs.TabPane tab="Tab 2" key="2">
    Content of Tab 2
  </Tabs.TabPane>
  <Tabs.TabPane tab="Tab 3" key="3">
    Content of Tab 3
  </Tabs.TabPane>
</Tabs>
```

**Common Props:**
- `activeKey?: string` - Active tab key
- `defaultActiveKey?: string` - Default active key
- `onChange?: (key: string) => void` - Tab change handler
- `type?: 'line' | 'card'` - Tab type
- `tabPosition?: 'top' | 'bottom' | 'left' | 'right'` - Tab position

---

### Tag

**Import:** `import { Tag } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Tag>Default Tag</Tag>
<Tag color="success">Success</Tag>
<Tag color="error" closable onClose={handleClose}>
  Closable Tag
</Tag>
```

**Common Props:**
- `color?: 'default' | 'success' | 'error' | 'warning' | 'info'` - Tag color
- `closable?: boolean` - Show close button
- `onClose?: () => void` - Close handler
- `visible?: boolean` - Tag visibility

---

### Textarea

**Import:** `import { Textarea } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Textarea
  placeholder="Enter description"
  value={textValue}
  onChange={handleTextChange}
  rows={4}
/>
```

**Common Props:**
- `value?: string` - Textarea value
- `defaultValue?: string` - Default value
- `placeholder?: string` - Placeholder text
- `onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void` - Change handler
- `rows?: number` - Number of rows
- `maxLength?: number` - Max length
- `disabled?: boolean` - Disable textarea
- `autoSize?: boolean | { minRows: number, maxRows: number }` - Auto size

---

### Toast / Notification

**Import:** `import { Toast } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
// Functional usage
Toast.success('Operation successful!');
Toast.error('Operation failed!');
Toast.warning('Warning message');
Toast.info('Info message');

// With options
Toast.success('Success!', {
  duration: 3000,
  position: 'top-right',
});
```

**Common Methods:**
- `Toast.success(message, options?)` - Success toast
- `Toast.error(message, options?)` - Error toast
- `Toast.warning(message, options?)` - Warning toast
- `Toast.info(message, options?)` - Info toast

**Options:**
- `duration?: number` - Display duration in ms
- `position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'`
- `onClose?: () => void` - Close callback

---

### Timeline

**Import:** `import { Timeline, StepperLineStyle } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
// Activity timeline
<Timeline
  current={2}
  items={[
    { title: 'Order Placed', description: '10:00 AM' },
    { title: 'Processing', description: '10:15 AM' },
    { title: 'Shipped', description: '2:30 PM' }
  ]}
/>

// With line style
<Timeline
  items={events}
  lineStyle={StepperLineStyle.Solid}  // or .Dash or .Dot
/>

// With custom step icons
<Timeline current={1}>
  <Step title="Event 1" nodeIcon={mdiIcon as IconName} />
  <Step title="Event 2" nodeIcon={mdiIcon2 as IconName} />
</Timeline>
```

**Common Props:**
- `current?: number` - Current active step
- `items?: Array<{title, description}>` - Timeline items
- `lineStyle?: 'solid' | 'dash' | 'dot'` - Connection line style
- `size?: 'small' | 'medium' | 'large'` - Timeline size
- `showActiveStepIndex?: boolean` - Show active step index

**When to use:**
- Activity feeds (user actions, system events)
- Order/process tracking
- Chronological event display
- History/audit logs

**See:** `docs/components/Timeline.md`, extends `Stepper`

---

### Tooltip

**Import:** `import { Tooltip } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Tooltip title="Tooltip text">
  <Button text="Hover me" />
</Tooltip>

<Tooltip title="Tooltip" placement="topLeft">
  <span>Text with tooltip</span>
</Tooltip>
```

**Common Props:**
- `title: string | React.ReactNode` - Tooltip content (required)
- `placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'`
- `trigger?: 'hover' | 'focus' | 'click'` - Trigger method
- `visible?: boolean` - Control visibility
- `onVisibleChange?: (visible: boolean) => void` - Visibility change handler

---

### ToggleButton

**Import:** `import { Button, ButtonVariant } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
// Basic toggle
const [checked, setChecked] = React.useState(false);
<Button
  toggle
  checked={checked}
  text={checked ? 'On' : 'Off'}
  onClick={() => setChecked(!checked)}
/>

// Favorite button
const [liked, setLiked] = React.useState(false);
<Button
  toggle
  checked={liked}
  text={liked ? 'Liked' : 'Like'}
  iconProps={{
    path: (liked ? mdiHeart : mdiHeartOutline) as IconName
  }}
  onClick={() => setLiked(!liked)}
/>

// With variants
<Button
  toggle
  checked={checked}
  text="Primary Toggle"
  variant={ButtonVariant.Primary}
  onClick={() => setChecked(!checked)}
/>
```

**Common Props:**
- `toggle: boolean` - Enable toggle behavior (required)
- `checked?: boolean` - Toggle state
- `text?: string` - Button text
- `iconProps?: IconProps` - Icon configuration
- `alignIcon?: 'left' | 'right'` - Icon position
- `variant?: ButtonVariant` - Button variant
- `onClick?: (e) => void` - Click handler

**When to use:**
- Favorites, likes, bookmarks
- Binary state toggles in UI (not forms - use Switch)
- Interactive state buttons

**See:** `docs/components/ToggleButton.md`, part of `Button` component

---

### Upload

**Import:** `import { Upload } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Upload
  action="/api/upload"
  onChange={handleUploadChange}
  fileList={fileList}
>
  <Button text="Upload File" />
</Upload>
```

**Common Props:**
- `action?: string` - Upload URL
- `fileList?: UploadFile[]` - File list
- `onChange?: (info: UploadChangeParam) => void` - Change handler
- `onRemove?: (file: UploadFile) => boolean | Promise<boolean>` - Remove handler
- `beforeUpload?: (file: File) => boolean | Promise<File>` - Before upload handler
- `accept?: string` - Accepted file types
- `multiple?: boolean` - Allow multiple files
- `disabled?: boolean` - Disable upload

---

## Layout Components

### Layout

**Import:** `import { Layout } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Layout>
  <Layout.Header>Header Content</Layout.Header>
  <Layout.Content>Main Content</Layout.Content>
  <Layout.Footer>Footer Content</Layout.Footer>
</Layout>

<Layout>
  <Layout.Sider>Sidebar</Layout.Sider>
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
  </Layout>
</Layout>
```

**Common Props:**
- `className?: string` - Custom class name
- `style?: React.CSSProperties` - Custom styles

**Sider Props:**
- `collapsed?: boolean` - Collapsed state
- `collapsible?: boolean` - Can collapse
- `width?: number | string` - Sider width
- `onCollapse?: (collapsed: boolean) => void` - Collapse handler

---

### Grid

**Import:** `import { Row, Col } from '@eightfold.ai/octuple';`

**Usage:**
```tsx
<Row gutter={16}>
  <Col span={8}>
    <div>Column 1</div>
  </Col>
  <Col span={8}>
    <div>Column 2</div>
  </Col>
  <Col span={8}>
    <div>Column 3</div>
  </Col>
</Row>
```

**Row Props:**
- `gutter?: number | [number, number]` - Grid spacing
- `align?: 'top' | 'middle' | 'bottom'` - Vertical alignment
- `justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'` - Horizontal alignment

**Col Props:**
- `span?: number` - Column span (0-24)
- `offset?: number` - Column offset
- `push?: number` - Column push
- `pull?: number` - Column pull

---

## Common Patterns

### Form with Validation
```tsx
import { Form, Input, Button } from '@eightfold.ai/octuple';

const MyForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item 
        label="Email" 
        name="email"
        rules={[
          { required: true, message: 'Please enter email' },
          { type: 'email', message: 'Please enter valid email' }
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" text="Submit" variant="primary" />
      </Form.Item>
    </Form>
  );
};
```

### Modal with Form
```tsx
import { Modal, Form, Input, Button } from '@eightfold.ai/octuple';

const FormModal = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    const values = await form.validateFields();
    onSubmit(values);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      title="Add Item"
      onOk={handleOk}
      onCancel={onClose}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
```

### Data Table with Actions
```tsx
import { Table, Button, Space } from '@eightfold.ai/octuple';

const DataTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button text="Edit" onClick={() => handleEdit(record)} />
          <Button text="Delete" variant="danger" onClick={() => handleDelete(record)} />
        </Space>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};
```

---

## Anti-Patterns (NEVER DO THIS)

### ❌ Using Raw HTML Elements
```tsx
// WRONG
<button className="btn">Click</button>
<input type="text" className="form-control" />
<div className="card">Content</div>

// CORRECT
<Button text="Click" />
<Input />
<Card>Content</Card>
```

### ❌ Using CSS Frameworks
```tsx
// WRONG - Never use Tailwind
<div className="flex items-center justify-between p-4 bg-blue-500">
  <span className="text-white">Content</span>
</div>

// WRONG - Never use Bootstrap
<div className="d-flex justify-content-between p-3 bg-primary">
  <span className="text-white">Content</span>
</div>

// CORRECT - Use Octuple components
<Row justify="space-between">
  <Col>Content</Col>
</Row>
```

### ❌ Inline Styles
```tsx
// AVOID when possible
<div style={{ padding: '20px', backgroundColor: 'blue' }}>Content</div>

// PREFER Octuple components with built-in styling
<Card>Content</Card>
```

---

## TypeScript Best Practices

### Component Props Typing
```tsx
import { Button, Modal } from '@eightfold.ai/octuple';
import { useState } from 'react';

interface MyComponentProps {
  title: string;
  onSave: (data: any) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onSave }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button text="Open" onClick={() => setVisible(true)} />
      <Modal
        visible={visible}
        title={title}
        onOk={() => {
          onSave({ data: 'example' });
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
      >
        Content
      </Modal>
    </>
  );
};

export default MyComponent;
```

---

## Additional Resources

- **Official Documentation**: Visit the Octuple Storybook for complete API reference
- **GitHub Repository**: https://github.com/EightfoldAI/octuple
- **NPM Package**: @eightfold.ai/octuple

---

## Quick Reference Checklist

Before generating code, always check:

- [ ] Are you importing from `@eightfold.ai/octuple`?
- [ ] Are you using Octuple components instead of raw HTML?
- [ ] Are you avoiding external CSS frameworks?
- [ ] Are you using TypeScript with proper types?
- [ ] Are you following Octuple's prop patterns?
- [ ] Have you checked this guide for the correct component API?

---

**Last Updated**: 2024
**Octuple Version**: 2.54.2+

