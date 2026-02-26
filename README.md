# @tonyh-2-eightfold/ef-design-system

Octuple DS Theme 2 components for Eightfold applications.

## Contents

- **Tokens**: Typography and color CSS variables (Octuple DS Theme 2)
- **Button**: Primary, secondary, outline, ghost, orange variants
- **Pill**: Tag/badge component with neutral, critical, orange, blueGreen variants
- **OpenTo**: "Open to mentoring/coffee/project" indicator
- **ElementCard**: Base card with icon, title, description, CTA button
- **CourseElementCard**: Course card with skills and completed-by avatars
- **PeopleElementCard**: People card with avatar and OpenTo
- **MentorElementCard**: Mentor card with profile and match info
- **Navbar**: Top navigation with tabs, search, avatar menu

## Setup

```bash
npm run build
```

## Usage

### In your app

1. Install: `npm install @tonyh-2-eightfold/ef-design-system` (or `file:../packages/design-system`)
2. Import styles: `import '@tonyh-2-eightfold/ef-design-system/styles'`
3. Load Gilroy fonts (place font files in `/fonts/` or configure paths)
4. Load Material Symbols: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0`

### Components

```tsx
import { Button, Pill, PeopleElementCard, Navbar } from '@tonyh-2-eightfold/ef-design-system'
import { Link } from 'react-router-dom'

// With React Router
<PeopleElementCard person={person} href="/people/1" LinkComponent={Link} />
<Navbar tabs={tabs} user={user} LinkComponent={Link} NavLinkComponent={NavLink} />
```

### Router-agnostic

Components that use navigation accept optional `LinkComponent` and `NavLinkComponent` props. Omit them for plain `<a href>` behavior.

### Assets

Place these in your app's public folder:
- `/course-pattern.png` (for CourseElementCard)
- `/people-pattern.png` (for PeopleElementCard)
- `/fonts/Gilroy-*.woff2` (or update paths in your font CSS)
