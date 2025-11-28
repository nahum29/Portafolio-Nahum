import { motion } from 'framer-motion'
import './DesktopIcon.css'

function DesktopIcon({ icon, title, onClick, index }) {
  return (
    <motion.div 
      className="desktop-icon"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon">{icon}</div>
      <div className="icon-title">{title}</div>
    </motion.div>
  )
}

export default DesktopIcon
