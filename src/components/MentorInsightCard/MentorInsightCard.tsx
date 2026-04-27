import { InsightCard } from '@/components/InsightCard/InsightCard'
import './MentorInsightCard.css'

export interface MentorInsightCardProps {
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

export function MentorInsightCard({
  title = MENTOR_DEFAULTS.title,
  badge = MENTOR_DEFAULTS.badge,
  description = MENTOR_DEFAULTS.description,
  recommendedLabel = MENTOR_DEFAULTS.recommendedLabel,
  buttonLabel = MENTOR_DEFAULTS.buttonLabel,
  buttonHref = MENTOR_DEFAULTS.buttonHref,
  mentor,
  fixedSize = true,
  LinkComponent,
}: MentorInsightCardProps) {
  return (
    <InsightCard
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
      <div className="mentor-insight-card">
        <div className="mentor-insight-card__profile">
          <img src={mentor.avatarSrc} alt="" className="mentor-insight-card__avatar" />
          <div className="mentor-insight-card__info">
            <span className="mentor-insight-card__name">{mentor.name}</span>
            <span className="mentor-insight-card__role">{mentor.role}</span>
          </div>
        </div>
        <div className="mentor-insight-card__match">
          <span className="material-symbols-outlined mentor-insight-card__match-icon">track_changes</span>
          <span className="mentor-insight-card__match-text">{mentor.matchText}</span>
          {mentor.matchCount > 0 && (
            <span className="mentor-insight-card__match-badge">+{mentor.matchCount}</span>
          )}
        </div>
      </div>
    </InsightCard>
  )
}
