import { motion } from 'framer-motion'
import './PhotoAvatar.css'

function PhotoAvatar() {
  return (
    <div className="photo-avatar-container" data-testid="photo-avatar">
      {/* Fondo dividido */}
      <div className="split-background">
        <motion.div 
          className="bg-color"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="bg-dark" />
      </div>

      {/* Contenedor principal */}
      <div className="photo-content">
        {/* Texto grande detrás */}
        <motion.div 
          className="big-text-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-outline">PORT</span>
          <span className="text-outline">FOLIO</span>
        </motion.div>

        {/* Marco de la foto */}
        <motion.div 
          className="photo-frame"
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
        >
          <div className="frame-border">
            <img 
              src="/images/nahum.jpg" 
              alt="Nahum Emmanuel" 
              className="photo-img"
            />
            <div className="photo-overlay" />
          </div>
        </motion.div>

        {/* Detalles decorativos */}
        <motion.div 
          className="decorative-line line-1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        <motion.div 
          className="decorative-line line-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />

        {/* Etiqueta con nombre */}
        <motion.div 
          className="name-label"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="label-text">NAHUM E.</span>
        </motion.div>
      </div>

      {/* Elementos flotantes */}
      <motion.div 
        className="floating-element element-1"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="floating-element element-2"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export default PhotoAvatar
