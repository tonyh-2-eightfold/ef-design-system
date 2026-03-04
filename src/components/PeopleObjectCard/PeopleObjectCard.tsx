import { OpenTo } from '../OpenTo/OpenTo'
import { Pill } from '../Pill/Pill'
import './ObjectCardBottomBar.css'
import './PeopleObjectCard.css'

export interface PeopleObjectCardProps {
  person: {
    name: string
    title: string
    email: string
    avatarSrc: string
    openTo: 'mentoring' | 'coffee' | 'project'
  }
  href?: string
  showBookmark?: boolean
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>
}

function DefaultLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return <a href={to} className={className}>{children}</a>
}

export function PeopleObjectCard({
  person,
  href = '#',
  showBookmark = true,
  LinkComponent = DefaultLink,
}: PeopleObjectCardProps) {
  const Link = LinkComponent
  const content = (
    <>
      <div className="people-object-card__banner">
        <div className="people-object-card__tag-wrap">
          <Pill icon="person" variant="orange" size="small">People</Pill>
        </div>
        <div className="people-object-card__banner-actions">
          <button type="button" className="people-object-card__icon-btn" aria-label="View org chart" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined">account_tree</span>
          </button>
          {showBookmark && (
            <button type="button" className="people-object-card__icon-btn" aria-label="Remove from favorites" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined">bookmark</span>
            </button>
          )}
        </div>
        <div className="people-object-card__pattern" aria-hidden />
      </div>
      <div className="people-object-card__avatar-wrap">
        <img src={person.avatarSrc} alt="" className="people-object-card__avatar" />
      </div>
      <div className="people-object-card__body">
        <span className="people-object-card__name">{person.name}</span>
        <span className="people-object-card__title">{person.title}</span>
        <span className="people-object-card__email">{person.email}</span>
      </div>
      <div className="people-object-card__divider" aria-hidden />
      <div className="object-card-bottom-bar">
        <div className="object-card-bottom-bar__content">
          <OpenTo items={[person.openTo]} labelAsButton={false} className="people-object-card__open-to" />
        </div>
      </div>
    </>
  )

  if (href === '#') {
    return <div className="people-object-card">{content}</div>
  }

  return <Link to={href} className="people-object-card">{content}</Link>
}
