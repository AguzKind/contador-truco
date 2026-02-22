export default function ScoreCard({ name, score, onIncrement, onDecrement, disabled }) {
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-amber-950/70 backdrop-blur-sm border border-amber-700/40 min-w-[160px]">
      <h3 className="text-xl font-semibold text-amber-50">{name}</h3>
      <span className="text-6xl font-bold text-amber-50 tabular-nums" aria-live="polite">
        {score}
      </span>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onDecrement}
          disabled={disabled || score <= 0}
          className="w-12 h-12 rounded-lg bg-amber-800/80 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-amber-50 font-bold text-xl border-2 border-amber-600 transition-colors"
          aria-label={`${name} restar un punto`}
        >
          −
        </button>
        <button
          type="button"
          onClick={onIncrement}
          disabled={disabled}
          className="w-12 h-12 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-amber-50 font-bold text-xl border-2 border-amber-500 transition-colors"
          aria-label={`${name} sumar un punto`}
        >
          +
        </button>
      </div>
    </div>
  )
}
