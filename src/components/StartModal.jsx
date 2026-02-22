export default function StartModal({ onSelect }) {
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-amber-950/90 backdrop-blur-sm border border-amber-700/50 shadow-2xl p-8 text-center">
        <h2 id="modal-title" className="text-2xl font-bold text-amber-50 mb-6">
          ¿A cuántos puntos jugamos?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => onSelect(15)}
            className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-amber-50 font-semibold text-lg transition-colors border-2 border-amber-500"
            aria-label="Jugar a 15 puntos"
          >
            15 puntos
          </button>
          <button
            type="button"
            onClick={() => onSelect(30)}
            className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-amber-50 font-semibold text-lg transition-colors border-2 border-amber-500"
            aria-label="Jugar a 30 puntos"
          >
            30 puntos
          </button>
        </div>
      </div>
    </div>
  )
}
