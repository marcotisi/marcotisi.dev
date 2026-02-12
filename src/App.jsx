import React, { useState, useRef, useEffect, useCallback } from 'react'
import { executeCommand } from './commands'
import './App.css'

const WELCOME = [
  { type: 'ascii' },
  { type: 'text', className: 'muted', content: 'Staff Engineer' },
  { type: 'blank' },
  { type: 'text', className: 'text', content: 'Type help and press Enter to get started. Try whoami, experience, or contact.' },
  { type: 'blank' },
]

function Prompt({ children }) {
  return (
    <span className="prompt">
      <span className="user">visitor</span>
      <span className="at">@</span>
      <span className="host">marcotisi.dev</span>
      <span className="colon">:</span>
      <span className="path">~</span>
      <span className="symbol">$</span>
      {children}
    </span>
  )
}

function AsciiArt() {
  return (
    <pre className="ascii-art">{`
 __  __                        _____ _     _ 
|  \\/  | __ _ _ __ ___ ___   |_   _(_)___(_)
| |\\/| |/ _\` | '__/ __/ _ \\    | | | / __| |
| |  | | (_| | | | (_| (_) |   | | | \\__ \\ |
|_|  |_|\\__,_|_|  \\___\\___/    |_| |_|___/_|
`}</pre>
  )
}

function QuickNav({ onCommand }) {
  const cmds = ['whoami', 'experience', 'education', 'contact', 'all']
  return (
    <div className="quick-nav">
      {cmds.map(cmd => (
        <button key={cmd} className="nav-btn" onClick={() => onCommand(cmd)}>
          {cmd}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
    })
  }, [])

  const runCommand = useCallback((cmd) => {
    const result = executeCommand(cmd)

    if (result === 'CLEAR') {
      setHistory([])
      setCmdHistory(prev => [...prev, cmd])
      setHistoryIndex(-1)
      setInput('')
      return
    }

    const entry = { cmd, output: result }
    setHistory(prev => [...prev, entry])
    setCmdHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)
    setInput('')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() && input === '') {
      setHistory(prev => [...prev, { cmd: '', output: null }])
      return
    }
    runCommand(input)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const newIndex = historyIndex === -1
        ? cmdHistory.length - 1
        : Math.max(0, historyIndex - 1)
      setHistoryIndex(newIndex)
      setInput(cmdHistory[newIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const newIndex = historyIndex + 1
      if (newIndex >= cmdHistory.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(newIndex)
        setInput(cmdHistory[newIndex])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const cmds = ['whoami', 'experience', 'contact', 'all', 'clear', 'help']
      const match = cmds.find(c => c.startsWith(input.toLowerCase()))
      if (match) setInput(match)
    }
  }

  const handleTerminalClick = (e) => {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
      inputRef.current?.focus()
    }
  }

  useEffect(() => { scrollToBottom() }, [history, scrollToBottom])
  useEffect(() => { inputRef.current?.focus() }, [])

  return (
    <div className="terminal" onClick={handleTerminalClick}>
      <div className="titlebar">
        <div className="dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="titlebar-text">bash</div>
        <div className="dots" style={{ visibility: 'hidden' }}>
          <span className="dot" /><span className="dot" /><span className="dot" />
        </div>
      </div>

      <QuickNav onCommand={runCommand} />

      <div className="output" ref={outputRef}>
        <div className="welcome">
          {WELCOME.map((line, i) => {
            if (line.type === 'ascii') return <AsciiArt key={i} />
            if (line.type === 'blank') return <div key={i} className="blank" />
            return <div key={i} className={line.className}>{line.content}</div>
          })}
        </div>

        {history.map((entry, i) => (
          <div key={i} className="history-entry">
            <div className="cmd-echo">
              <Prompt />
              <span className="typed-cmd">{entry.cmd}</span>
            </div>
            {entry.output}
          </div>
        ))}
      </div>

      <form className="input-line" onSubmit={handleSubmit}>
        <Prompt />
        <input
          ref={inputRef}
          type="text"
          className="cmd-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal command input"
        />
      </form>
    </div>
  )
}
