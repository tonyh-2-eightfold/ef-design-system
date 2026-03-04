import './ObjectCard.css'

export interface ObjectCardProps {
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

export function ObjectCard({
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
}: ObjectCardProps) {
  const Link = LinkComponent
  return (
    <div
      className={`object-card ${fixedSize ? 'object-card--fixed' : ''}`}
      style={
        {
          '--object-card-bg': bgColor,
          '--object-card-icon-bg': iconBgColor,
          '--object-card-icon-color': iconColor,
          '--object-card-text-color': textColor,
        } as React.CSSProperties
      }
    >
      <div className="object-card__header">
        <div className="object-card__header-content">
          <div className="object-card__title-row">
            <h3 className="object-card__title">{title}</h3>
            {badge && <span className="object-card__badge">{badge}</span>}
          </div>
          <p className="object-card__description">{description}</p>
        </div>
        <div className="object-card__icon-wrap" aria-hidden>
          <span className="material-symbols-outlined object-card__icon">{icon}</span>
        </div>
      </div>
      {recommendedLabel && <span className="object-card__recommended">{recommendedLabel}</span>}
      <div className="object-card__content">{children}</div>
      <Link to={buttonHref} className="object-card__btn">
        {buttonLabel}
      </Link>
    </div>
  )
}
