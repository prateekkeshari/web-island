import { FiArrowRight } from 'react-icons/fi'

export default function Footer({ handleDownload, islandState }) {
  return (
    <footer className="relative border-t border-neutral-800/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D94E1E]" />
              <span className="text-sm font-medium">NewAI Research</span>
            </div>
            <nav className="flex items-center gap-6">
              <button className="text-sm text-neutral-400 hover:text-white transition-colors">
                Previous Reports
              </button>
              <button className="text-sm text-neutral-400 hover:text-white transition-colors">
                Methodology
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-neutral-500">
              Released December 2024
            </span>
            <div className="h-4 w-px bg-neutral-800" />
            <button 
              onClick={handleDownload}
              disabled={islandState !== 'nav'}
              className="text-sm text-neutral-400 hover:text-white disabled:opacity-50 
                disabled:cursor-not-allowed disabled:hover:text-neutral-400 
                transition-colors flex items-center gap-2"
            >
              <span>Download Report</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 