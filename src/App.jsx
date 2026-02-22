import { useState, useCallback } from 'react'
import StartModal from './components/StartModal'
import ScoreCard from './components/ScoreCard'

export default function App() {
  const [targetPoints, setTargetPoints] = useState(null)
  const [showModal, setShowModal] = useState(true)
  const [nosotros, setNosotros] = useState(0)
  const [ellos, setEllos] = useState(0)
  const [winner, setWinner] = useState(null)

  const checkWinner = useCallback((n, e) => {
    if (targetPoints == null) return
    if (n >= targetPoints) setWinner('Nosotros')
    else if (e >= targetPoints) setWinner('Ellos')
  }, [targetPoints])

  const handleSelectTarget = (points) => {
    setTargetPoints(points)
    setShowModal(false)
  }

  const handleNosotrosChange = (delta) => {
    const next = Math.max(0, nosotros + delta)
    setNosotros(next)
    checkWinner(next, ellos)
  }

  const handleEllosChange = (delta) => {
    const next = Math.max(0, ellos + delta)
    setEllos(next)
    checkWinner(nosotros, next)
  }

  const handleReset = () => {
    setNosotros(0)
    setEllos(0)
    setWinner(null)
  }

  const hasWinner = winner !== null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {showModal && <StartModal onSelect={handleSelectTarget} />}

      {!showModal && (
        <div className="w-full max-w-2xl rounded-2xl bg-black/50 bg-amber-950/60 backdrop-blur-md border border-amber-700/50 shadow-2xl p-8 flex flex-col items-center gap-8">
          <p className="text-amber-200/90 text-sm">
            Partida a {targetPoints} puntos
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <ScoreCard
              name="Nosotros"
              score={nosotros}
              onIncrement={() => handleNosotrosChange(1)}
              onDecrement={() => handleNosotrosChange(-1)}
              disabled={hasWinner}
            />
            <ScoreCard
              name="Ellos"
              score={ellos}
              onIncrement={() => handleEllosChange(1)}
              onDecrement={() => handleEllosChange(-1)}
              disabled={hasWinner}
            />
          </div>

          {hasWinner && (
            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-2xl font-bold text-amber-50">
                ¡Ganaron {winner}!
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-amber-50 font-semibold border-2 border-amber-500 transition-colors"
                aria-label="Jugar de nuevo"
              >
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
