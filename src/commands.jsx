import React from 'react'
import { profile, experience, education } from './data'

function Whoami() {
  return (
    <div className="cmd-output">
      <div className="whoami-header">
        <img src={profile.avatar} alt={profile.name} className="avatar" />
        <div className="whoami-info">
          <div className="section-title">{profile.name}</div>
          <div className="highlight">{profile.title}</div>
          <div className="whoami-meta">
            <span className="muted">{profile.contact.location}</span>
          </div>
        </div>
      </div>
      <div className="blank" />
      <div className="text summary-text">{profile.summary}</div>
      <div className="blank" />
      <div className="links">
        <a href={profile.contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        {' · '}
        <a href={profile.contact.github} target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div className="cmd-output">
      <div className="section-title">Experience</div>
      {experience.map((job, i) => (
        <div key={i} className="job-entry">
          <div className="job-header">
            <span className="highlight">{job.role}</span>
            <span className="muted"> @ </span>
            {job.url ? (
              <a href={job.url} target="_blank" rel="noopener">{job.company}</a>
            ) : (
              <span className="accent">{job.company}</span>
            )}
          </div>
          <div className="job-meta">
            {job.location} · {job.period}
            {job.duration && <span className="subtle"> ({job.duration})</span>}
          </div>
          {job.description && (
            <div className="job-description">{job.description}</div>
          )}
          <ul className="job-bullets">
            {job.highlights.map((h, j) => (
              <li key={j}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Contact() {
  return (
    <div className="cmd-output">
      <div className="section-title">Contact</div>
      <div className="contact-row">
        <span className="accent">location</span>
        <span>{profile.contact.location}</span>
      </div>
      <div className="contact-row">
        <span className="accent">linkedin</span>
        <a href={profile.contact.linkedin} target="_blank" rel="noopener">{profile.contact.linkedin}</a>
      </div>
      <div className="contact-row">
        <span className="accent">github</span>
        <a href={profile.contact.github} target="_blank" rel="noopener">{profile.contact.github}</a>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className="cmd-output">
      <div className="section-title">Education</div>
      {education.map((edu, i) => (
        <div key={i} className="job-entry">
          <div className="job-header">
            <span className="highlight">{edu.degree}</span>
            <span className="muted"> — </span>
            <span className="accent">{edu.institution}</span>
          </div>
          {edu.thesis && (
            <div className="job-description">Thesis: {edu.thesis}</div>
          )}
        </div>
      ))}
    </div>
  )
}

function Help() {
  const cmds = [
    ['whoami', 'About me'],
    ['experience', 'Work history'],
    ['education', 'Education'],
    ['contact', 'Get in touch'],
    ['all', 'Show full resume'],
    ['clear', 'Clear terminal'],
    ['help', 'Show this message'],
  ]
  return (
    <div className="cmd-output">
      <div className="section-title">Available Commands</div>
      {cmds.map(([cmd, desc], i) => (
        <div key={i} className="help-row">
          <span className="accent">{cmd}</span>
          <span className="muted">{desc}</span>
        </div>
      ))}
    </div>
  )
}

function All() {
  return (
    <div className="cmd-output">
      <Whoami />
      <div className="separator" />
      <Experience />
      <div className="separator" />
      <Education />
      <div className="separator" />
      <Contact />
    </div>
  )
}

function NotFound({ input }) {
  return (
    <div className="cmd-output error">
      Command not found: {input}. Type <span className="accent">help</span> for available commands.
    </div>
  )
}

export function executeCommand(input) {
  const trimmed = input.trim().toLowerCase()
  const cmd = trimmed.split(/\s+/)[0]

  switch (cmd) {
    case '':
      return null
    case 'whoami':
    case 'about':
      return <Whoami />
    case 'experience':
    case 'work':
    case 'exp':
    case 'jobs':
      return <Experience />
    case 'education':
    case 'edu':
      return <Education />
    case 'contact':
      return <Contact />
    case 'all':
    case 'resume':
    case 'cv':
      return <All />
    case 'help':
    case '?':
      return <Help />
    case 'clear':
    case 'cls':
      return 'CLEAR'
    default:
      return <NotFound input={trimmed} />
  }
}
