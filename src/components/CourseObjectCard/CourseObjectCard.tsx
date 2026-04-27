import { Pill } from '@/components/Pill/Pill'
import { OpenTo } from '@/components/OpenTo/OpenTo'
import './ObjectCardBottomBar.css'
import './CourseObjectCard.css'

export interface CourseObjectCardFacepileProps {
  avatarUrls: string[]
}

export type CourseObjectCardBottomBar =
  | { type: 'none' }
  | { type: 'completedBy'; avatars: string[] }
  | { type: 'openTo'; items: ('mentoring' | 'coffee' | 'project')[] }
  | { type: 'buttons'; children: React.ReactNode }

export interface CourseObjectCardProps {
  course: {
    title: string
    provider?: string
    duration?: string
    skills?: string[]
    /** @deprecated Use `bottomBar={{ type: 'completedBy', avatars }}` instead */
    completedBy?: string[]
  }
  href?: string
  showBookmark?: boolean
  /** Render the "completed by" facepile (e.g. AvatarGroup). When provided, replaces the default img stack. */
  renderFacepile?: (props: CourseObjectCardFacepileProps) => React.ReactNode
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>
  /**
   * Bottom bar variant:
   * - `none` — hides divider and bottom bar
   * - `completedBy` — facepile + "completed this" text
   * - `openTo` — "Open to" with icons (mentoring, coffee, project)
   * - `buttons` — render custom button children (use small variant)
   *
   * Falls back to legacy `course.completedBy` if not set.
   */
  bottomBar?: CourseObjectCardBottomBar
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
  bottomBar: bottomBarProp,
}: CourseObjectCardProps) {
  const Link = LinkComponent

  // Resolve bottom bar — prefer explicit prop, fall back to legacy completedBy
  const bottomBar: CourseObjectCardBottomBar | undefined = bottomBarProp
    ?? (course.completedBy && course.completedBy.length > 0
      ? { type: 'completedBy', avatars: course.completedBy }
      : undefined)

  const showBottom = bottomBar && bottomBar.type !== 'none'

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
      {showBottom && (
        <>
          <div className="course-object-card__divider" aria-hidden />
          <div className="object-card-bottom-bar">
            <div className="object-card-bottom-bar__content">
              {bottomBar.type === 'completedBy' && (
                <>
                  {renderFacepile ? (
                    renderFacepile({ avatarUrls: bottomBar.avatars })
                  ) : (
                    <div className="course-object-card__facepile">
                      {bottomBar.avatars.map((avatarSrc, i) => (
                        <img key={i} src={avatarSrc} alt="" className="course-object-card__facepile-avatar" />
                      ))}
                    </div>
                  )}
                  <span className="course-object-card__completed-text">completed this</span>
                </>
              )}
              {bottomBar.type === 'openTo' && (
                <OpenTo items={bottomBar.items} labelAsButton={false} />
              )}
              {bottomBar.type === 'buttons' && (
                <div className="course-object-card__bottom-buttons">
                  {bottomBar.children}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )

  if (href === '#') {
    return <div className="course-object-card">{content}</div>
  }

  return <Link to={href} className="course-object-card">{content}</Link>
}
