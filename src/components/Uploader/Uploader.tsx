import * as React from 'react'
import { cn } from '@/lib/utils'
import './Uploader.css'

/* ─── UploaderFileItem ─────────────────────────────────────────────────── */

export type UploaderFileStatus = 'uploading' | 'success' | 'error'

export interface UploaderFileItemProps {
  name: string
  size?: string
  status?: UploaderFileStatus
  progress?: number
  errorMessage?: string
  onRemove?: () => void
  className?: string
}

const FILE_ICON_MAP: Record<string, string> = {
  pdf: 'picture_as_pdf',
  doc: 'description',
  docx: 'description',
  xls: 'table_chart',
  xlsx: 'table_chart',
  csv: 'table_chart',
  ppt: 'slideshow',
  pptx: 'slideshow',
  png: 'image',
  jpg: 'image',
  jpeg: 'image',
  gif: 'image',
  svg: 'image',
  mp4: 'videocam',
  mp3: 'audio_file',
  zip: 'folder_zip',
  txt: 'text_snippet',
}

function getFileIcon(name: string): string {
  const ext = name.split('.').pop()?.toLowerCase() ?? ''
  return FILE_ICON_MAP[ext] ?? 'insert_drive_file'
}

export function UploaderFileItem({
  name,
  size,
  status = 'uploading',
  progress,
  errorMessage,
  onRemove,
  className,
}: UploaderFileItemProps) {
  return (
    <div
      data-status={status}
      className={cn('ef-uploader-file', `ef-uploader-file--${status}`, className)}
    >
      <span className="material-symbols-outlined ef-uploader-file__icon" aria-hidden>
        {getFileIcon(name)}
      </span>
      <div className="ef-uploader-file__info">
        <div className="ef-uploader-file__name-row">
          <span className="ef-uploader-file__name">{name}</span>
          {size && status !== 'uploading' && (
            <span className="ef-uploader-file__size">{size}</span>
          )}
          {status === 'uploading' && progress != null && (
            <span className="ef-uploader-file__size">{Math.round(progress)}%</span>
          )}
        </div>
        {status === 'uploading' && progress != null && (
          <div className="ef-uploader-file__progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="ef-uploader-file__progress-fill"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        )}
        {status === 'error' && errorMessage && (
          <span className="ef-uploader-file__error">{errorMessage}</span>
        )}
      </div>
      {status === 'success' && (
        <span className="material-symbols-outlined ef-uploader-file__status-icon" aria-hidden>
          check_circle
        </span>
      )}
      {status === 'error' && (
        <span className="material-symbols-outlined ef-uploader-file__status-icon ef-uploader-file__status-icon--error" aria-hidden>
          error
        </span>
      )}
      {onRemove && (
        <button
          type="button"
          className="ef-uploader-file__remove"
          onClick={onRemove}
          aria-label={`Remove ${name}`}
        >
          <span className="material-symbols-outlined" aria-hidden>close</span>
        </button>
      )}
    </div>
  )
}

/* ─── Uploader ─────────────────────────────────────────────────────────── */

export interface UploaderProps {
  /** Called with a FileList when files are selected or dropped */
  onFiles?: (files: FileList) => void
  accept?: string
  multiple?: boolean
  maxFileSizeMb?: number
  disabled?: boolean
  dragLabel?: string
  browseLabel?: string
  hint?: string
  children?: React.ReactNode
  className?: string
}

export function Uploader({
  onFiles,
  accept,
  multiple = false,
  disabled = false,
  dragLabel = 'Drag and drop files here',
  browseLabel = 'Browse files',
  hint,
  children,
  className,
}: UploaderProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = React.useState(false)

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    if (!disabled) setDragging(true)
  }
  function handleDragLeave() { setDragging(false) }
  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    if (disabled) return
    if (e.dataTransfer.files.length) onFiles?.(e.dataTransfer.files)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      onFiles?.(e.target.files)
      e.target.value = ''
    }
  }

  return (
    <div className={cn('ef-uploader', className)}>
      {/* Drop zone */}
      <div
        role="button"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        data-dragging={dragging || undefined}
        data-disabled={disabled || undefined}
        className={cn(
          'ef-uploader__zone',
          dragging && 'ef-uploader__zone--dragging',
          disabled && 'ef-uploader__zone--disabled'
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault()
            inputRef.current?.click()
          }
        }}
      >
        <span className="material-symbols-outlined ef-uploader__icon" aria-hidden>
          cloud_upload
        </span>
        <div className="ef-uploader__labels">
          <span className="ef-uploader__drag-label">{dragLabel}</span>
          <span className="ef-uploader__or">or</span>
          <span className="ef-uploader__browse-label">{browseLabel}</span>
        </div>
        {hint && <span className="ef-uploader__hint">{hint}</span>}
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="ef-uploader__input"
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden
      />

      {/* File list */}
      {children && (
        <div className="ef-uploader__file-list">
          {children}
        </div>
      )}
    </div>
  )
}
