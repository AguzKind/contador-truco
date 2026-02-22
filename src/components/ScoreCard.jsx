export default function ScoreCard({ name, score, onIncrement, onDecrement, disabled }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-amber-950/70 backdrop-blur-sm border border-amber-700/40 w-full sm:min-w-[160px] sm:w-auto flex-1 sm:flex-initial">
      <h3 className="text-lg sm:text-xl font-semibold text-amber-50">{name}</h3>
      <span className="text-5xl sm:text-6xl font-bold text-amber-50 tabular-nums select-none" aria-live="polite">
        {score}
      </span>
      <div className="flex gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onDecrement}
          disabled={disabled || score <= 0}
          className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-lg bg-amber-800/80 hover:bg-amber-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 text-amber-50 font-bold text-xl border-2 border-amber-600 transition-all touch-manipulation"
          aria-label={`${name} restar un punto`}
        >
          −
        </button>
        <button
          type="button"
          onClick={onIncrement}
          disabled={disabled}
          className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-lg bg-amber-600 hover:bg-amber-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 text-amber-50 font-bold text-xl border-2 border-amber-500 transition-all touch-manipulation"
          aria-label={`${name} sumar un punto`}
        >
          +
        </button>
      </div>
    </div>
  )
}
