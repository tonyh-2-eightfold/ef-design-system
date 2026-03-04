import './InsightCard.css'

export interface InsightCardProps {
  title: string
  badge?: string
  description: string
  recommendedLabel?: string
  icon: string
  bgColor: string
  iconBgColor: string
  iconColor: string
  textColor?: string
  buttonLabel: string
  buttonHref?: string
  children: React.ReactNode
  fixedSize?: boolean
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>
}

function DefaultLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

export function InsightCard({
  title,
  badge,
  description,
  recommendedLabel,
  icon,
  bgColor,
  iconBgColor,
  iconColor,
  textColor = '#3B2600',
  buttonLabel,
  buttonHref = '#',
  children,
  fixedSize = true,
  LinkComponent = DefaultLink,
}: InsightCardProps) {
  const Link = LinkComponent
  return (
    <div
      className={`insight-card ${fixedSize ? 'insight-card--fixed' : ''}`}
      style={
        {
          '--insight-card-bg': bgColor,
          '--insight-card-icon-bg': iconBgColor,
          '--insight-card-icon-color': iconColor,
          '--insight-card-text-color': textColor,
        } as React.CSSProperties
      }
    >
      <div className="insight-card__header">
        <div className="insight-card__header-content">
          <div className="insight-card__title-row">
            <h3 className="insight-card__title">{title}</h3>
            {badge && <span className="insight-card__badge">{badge}</span>}
          </div>
          <p className="insight-card__description">{description}</p>
        </div>
        <div className="insight-card__icon-wrap" aria-hidden>
          <span className="material-symbols-outlined insight-card__icon">{icon}</span>
        </div>
      </div>
      {recommendedLabel && <span className="insight-card__recommended">{recommendedLabel}</span>}
      <div className="insight-card__content">{children}</div>
      <Link to={buttonHref} className="insight-card__btn">
        {buttonLabel}
      </Link>
    </div>
  )
}
