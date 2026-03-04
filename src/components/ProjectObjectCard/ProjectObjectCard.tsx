import { Pill } from '../Pill/Pill'
import '../CourseObjectCard/ObjectCardBottomBar.css'
import './ProjectObjectCard.css'

export interface ProjectObjectCardFacepileProps {
  avatarUrls: string[]
}

export interface ProjectObjectCardProps {
  project: {
    title: string
    owner?: string
    status?: string
    skills?: string[]
    contributedBy?: string[]
    /** Shown under the tags when present. Hidden when showBottomBar is false and no manager. */
    projectManager?: {
      name: string
      avatarSrc?: string
    }
  }
  href?: string
  showBookmark?: boolean
  /** When false, hides the bottom bar (contributors row). Default true. */
  showBottomBar?: boolean
  /** Render the "contributed by" facepile (e.g. AvatarGroup). When provided, replaces the default img stack. */
  renderFacepile?: (props: ProjectObjectCardFacepileProps) => React.ReactNode
  LinkComponent?: React.ComponentType<{ to: string; children: React.ReactNode; className?: string }>
}

function DefaultLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

export function ProjectObjectCard({
  project,
  href = '#',
  showBookmark = true,
  showBottomBar = true,
  renderFacepile,
  LinkComponent = DefaultLink,
}: ProjectObjectCardProps) {
  const Link = LinkComponent
  const content = (
    <div className="project-object-card__inner">
      <div className="project-object-card__banner">
        <div className="project-object-card__tag-wrap">
          <Pill icon="folder" variant="blueGreen" size="small">Project</Pill>
        </div>
        <div className="project-object-card__banner-actions">
          <button type="button" className="project-object-card__icon-btn" aria-label="Add to workspace" onClick={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined">add</span>
          </button>
          {showBookmark && (
            <button type="button" className="project-object-card__icon-btn" aria-label="Save project" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined">bookmark</span>
            </button>
          )}
        </div>
      </div>
      <div className="project-object-card__body">
        <span className="project-object-card__title">{project.title}</span>
        {(project.owner || project.status) && (
          <span className="project-object-card__meta">
            {[project.owner, project.status].filter(Boolean).join(' • ')}
          </span>
        )}
        {project.skills && project.skills.length > 0 && (
          <div className="project-object-card__skills">
            {project.skills.slice(0, 2).map((skill) => (
              <span key={skill} className="project-object-card__skill-tag">{skill}</span>
            ))}
            {project.skills.length > 2 && (
              <span className="project-object-card__skill-tag project-object-card__skill-tag--more">
                +{project.skills.length - 2}
              </span>
            )}
          </div>
        )}
        {project.projectManager && (
          <div className="project-object-card__manager">
            {project.projectManager.avatarSrc ? (
              <img
                src={project.projectManager.avatarSrc}
                alt=""
                className="project-object-card__manager-avatar"
              />
            ) : (
              <span className="project-object-card__manager-avatar project-object-card__manager-avatar--fallback" aria-hidden>
                {project.projectManager.name.slice(0, 2).toUpperCase()}
              </span>
            )}
            <div className="project-object-card__manager-info">
              <span className="project-object-card__manager-name">{project.projectManager.name}</span>
              <span className="project-object-card__manager-label">Project manager</span>
            </div>
          </div>
        )}
      </div>
      {showBottomBar && (
        <>
          <div className="project-object-card__divider" aria-hidden />
          <div className="object-card-bottom-bar">
            <div className="object-card-bottom-bar__content">
              {project.contributedBy && project.contributedBy.length > 0 && (
                <>
                  {renderFacepile ? (
                    renderFacepile({ avatarUrls: project.contributedBy })
                  ) : (
                    <div className="project-object-card__facepile">
                      {project.contributedBy.map((avatarSrc, i) => (
                        <img key={i} src={avatarSrc} alt="" className="project-object-card__facepile-avatar" />
                      ))}
                    </div>
                  )}
                  <span className="project-object-card__contributed-text">contributors</span>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )

  if (href === '#') {
    return <div className="project-object-card">{content}</div>
  }

  return <Link to={href} className="project-object-card">{content}</Link>
}
