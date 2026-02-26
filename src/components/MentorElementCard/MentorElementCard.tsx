import { ElementCard } from '../ElementCard/ElementCard'
import './MentorElementCard.css'

export interface MentorElementCardProps {
  title?: string
  badge?: string
  description?: string
  recommendedLabel?: string
  buttonLabel?: string
  buttonHref?: string
  mentor: {
    name: string
    role: string
    avatarSrc: string
    matchText: string
    matchCount: number
  }
  fixedSize?: boolean
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>
}

const MENTOR_DEFAULTS = {
  title: 'Mentors',
  badge: '11',
  description: 'Get guidance and support',
  recommendedLabel: 'Recommended for you',
  buttonLabel: 'Explore Mentors',
  buttonHref: '#',
}

export function MentorElementCard({
  title = MENTOR_DEFAULTS.title,
  badge = MENTOR_DEFAULTS.badge,
  description = MENTOR_DEFAULTS.description,
  recommendedLabel = MENTOR_DEFAULTS.recommendedLabel,
  buttonLabel = MENTOR_DEFAULTS.buttonLabel,
  buttonHref = MENTOR_DEFAULTS.buttonHref,
  mentor,
  fixedSize = true,
  LinkComponent,
}: MentorElementCardProps) {
  return (
    <ElementCard
      title={title}
      badge={badge}
      description={description}
      recommendedLabel={recommendedLabel}
      icon="groups"
      bgColor="#FFF0D6"
      iconBgColor="#FFE8C2"
      iconColor="#7D4F07"
      textColor="#3B2600"
      buttonLabel={buttonLabel}
      buttonHref={buttonHref}
      fixedSize={fixedSize}
      LinkComponent={LinkComponent}
    >
      <div className="mentor-element-card">
        <div className="mentor-element-card__profile">
          <img src={mentor.avatarSrc} alt="" className="mentor-element-card__avatar" />
          <div className="mentor-element-card__info">
            <span className="mentor-element-card__name">{mentor.name}</span>
            <span className="mentor-element-card__role">{mentor.role}</span>
          </div>
        </div>
        <div className="mentor-element-card__match">
          <span className="material-symbols-outlined mentor-element-card__match-icon">track_changes</span>
          <span className="mentor-element-card__match-text">{mentor.matchText}</span>
          {mentor.matchCount > 0 && (
            <span className="mentor-element-card__match-badge">+{mentor.matchCount}</span>
          )}
        </div>
      </div>
    </ElementCard>
  )
}
