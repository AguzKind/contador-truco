export default function StartModal({ onSelect }) {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-amber-950/90 backdrop-blur-sm border border-amber-700/50 shadow-2xl p-6 sm:p-8 text-center my-auto">
        <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-amber-50 mb-4 sm:mb-6">
          ¿A cuántos puntos jugamos?
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            type="button"
            onClick={() => onSelect(15)}
            className="min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-amber-50 font-semibold text-base sm:text-lg transition-colors border-2 border-amber-500 touch-manipulation"
            aria-label="Jugar a 15 puntos"
          >
            15 puntos
          </button>
          <button
            type="button"
            onClick={() => onSelect(30)}
            className="min-h-[48px] px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-amber-50 font-semibold text-base sm:text-lg transition-colors border-2 border-amber-500 touch-manipulation"
            aria-label="Jugar a 30 puntos"
          >
            30 puntos
          </button>
        </div>
      </div>
    </div>
  )
}
