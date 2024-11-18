import { useState } from 'react'

export function useDownload({ islandState, setIslandState }) {
  const [progress, setProgress] = useState(0)

  const handleDownload = () => {
    if (islandState !== 'nav') return
    setIslandState('downloading')
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIslandState('complete')
          return 100
        }
        return prev + 10
      })
    }, 400)
  }

  return {
    progress,
    handleDownload
  }
} 