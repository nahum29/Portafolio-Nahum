import { expect, afterEach, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Mock localStorage
const localStorageMock = {
  getItem: (key) => null,
  setItem: (key, value) => {},
  removeItem: (key) => {},
  clear: () => {}
}

global.localStorage = localStorageMock

// Cleanup después de cada test
afterEach(() => {
  cleanup()
})
