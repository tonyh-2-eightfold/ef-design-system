import { Pill } from '../Pill/Pill'
import './ObjectCardBottomBar.css'
import './CourseObjectCard.css'

export interface CourseObjectCardFacepileProps {
  avatarUrls: string[]
}

export interface CourseObjectCardProps {
  course: {
    title: string
    provider?: string
    duration?: string
    skills?: string[]
    completedBy?: string[]
  }
  href?: string
  showBookmark?: boolean
  /** Render the "completed by" facepile (e.g. AvatarGroup). When provided, replaces the default img stack. */
  renderFacepile?: (props: CourseObjectCardFacepileProps) => React.ReactNode
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>
}

function DefaultLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

export function CourseObjectCard({
  course,
  href = '#',
  showBookmark = true,
  renderFacepile,
  LinkComponent = DefaultLink,
}: CourseObjectCardProps) {
  const Link = LinkComponent
  const content = (
    <div className="course-object-card__inner">
      <div className="course-object-card__banner">
        <div className="course-object-card__tag-wrap">
          <Pill icon="menu_book" variant="blueGreen" size="small">Course</Pill>
        </div>
        <div className="course-object-card__banner-actions">
          <button type="button" className="course-object-card__icon-btn" aria-label="Add to learning plan" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined">add</span>
          </button>
          {showBookmark && (
            <button type="button" className="course-object-card__icon-btn" aria-label="Save course" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined">bookmark</span>
            </button>
          )}
        </div>
      </div>
      <div className="course-object-card__body">
        <span className="course-object-card__title">{course.title}</span>
        {(course.provider || course.duration) && (
          <span className="course-object-card__meta">
            {[course.provider, course.duration].filter(Boolean).join(' • ')}
          </span>
        )}
        {course.skills && course.skills.length > 0 && (
          <div className="course-object-card__skills">
            {course.skills.slice(0, 2).map((skill) => (
              <span key={skill} className="course-object-card__skill-tag">{skill}</span>
            ))}
            {course.skills.length > 2 && (
              <span className="course-object-card__skill-tag course-object-card__skill-tag--more">
                +{course.skills.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="course-object-card__divider" aria-hidden />
      <div className="object-card-bottom-bar">
        <div className="object-card-bottom-bar__content">
          {course.completedBy && course.completedBy.length > 0 && (
            <>
              {renderFacepile ? (
                renderFacepile({ avatarUrls: course.completedBy })
              ) : (
                <div className="course-object-card__facepile">
                  {course.completedBy.map((avatarSrc, i) => (
                    <img key={i} src={avatarSrc} alt="" className="course-object-card__facepile-avatar" />
                  ))}
                </div>
              )}
              <span className="course-object-card__completed-text">completed this</span>
            </>
          )}
        </div>
      </div>
    </div>
  )

  if (href === '#') {
    return <div className="course-object-card">{content}</div>
  }

  return <Link to={href} className="course-object-card">{content}</Link>
}
