import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import WindowContent from './WindowContent'
import './Window.css'

function Window({ id, title, content, x, y, width, height, isActive, onClose, onMinimize, onFocus, onPositionChange }) {
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)

  return (
    <motion.div
      className={`window ${isActive ? 'active' : ''}`}
      style={{
        left: x,
        top: y,
        width,
        height,
        zIndex: isActive ? 1000 : 1
      }}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth - width,
        bottom: window.innerHeight - 80 - height
      }}
      onDrag={(e, info) => {
        setIsDragging(true)
      }}
      onDragEnd={(e, info) => {
        setIsDragging(false)
        onPositionChange(info.point.x, info.point.y)
      }}
      onMouseDown={onFocus}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
    >
      <div className="window-titlebar">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button className="window-button minimize" onClick={onMinimize}>−</button>
          <button className="window-button maximize">□</button>
          <button className="window-button close" onClick={onClose}>×</button>
        </div>
      </div>
      <div className="window-content">
        <WindowContent type={content} />
      </div>
    </motion.div>
  )
}

export default Window
