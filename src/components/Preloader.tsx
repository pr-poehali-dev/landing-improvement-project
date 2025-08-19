import { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Запуск системы...')

  const loadingTexts = [
    'Запуск системы...',
    'Инициализация серверов...',
    'Подготовка к полёту...',
    'Поехали! 🚀'
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5
        
        if (newProgress >= 25 && newProgress < 50) {
          setLoadingText(loadingTexts[1])
        } else if (newProgress >= 50 && newProgress < 85) {
          setLoadingText(loadingTexts[2])
        } else if (newProgress >= 85) {
          setLoadingText(loadingTexts[3])
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            onComplete()
          }, 500)
          return 100
        }
        
        return newProgress
      })
    }, 150)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <div className="preloader">
      <div className="text-center">
        <div className="loader-rocket mb-8 relative">
          <div className="loader-trail"></div>
          🚀
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-neon-purple mb-2 animate-pulse-glow">
            QiwzyHost
          </h1>
          <p className="text-xl text-white/80">{loadingText}</p>
        </div>
        
        <div className="w-80 bg-card/30 rounded-full h-3 mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-purple to-neon-green transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-neon-purple font-mono text-lg">
          {Math.round(progress)}%
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Preloader