import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Login from './components/Login'
import Desktop from './components/Desktop'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!isLoggedIn ? (
        <motion.div
          key="login"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Login onLogin={handleLogin} />
        </motion.div>
      ) : (
        <motion.div
          key="desktop"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Desktop />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
