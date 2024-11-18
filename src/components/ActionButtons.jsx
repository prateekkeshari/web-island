import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiBookmark, FiShare2 } from 'react-icons/fi'

export default function ActionButtons({ 
  handleDownload, 
  islandState, 
  saved, 
  setSaved 
}) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'State of AI 2025',
        text: 'Check out the State of AI 2025 report',
        url: window.location.href,
      })
    } catch (err) {
      console.log('Share failed:', err)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-8 flex items-center gap-4 justify-center"
    >
      <button 
        onClick={handleDownload}
        disabled={islandState !== 'nav'}
        className={`
          group px-7 py-4 rounded-full font-medium 
          transition-all duration-300 flex items-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed
          relative overflow-hidden
          bg-gradient-to-r from-white/[0.03] to-transparent
          backdrop-blur-sm
          border border-white/[0.08]
          hover:border-white/[0.15]
          hover:bg-white/[0.05]
          before:absolute before:inset-0
          before:bg-[radial-gradient(1000px_circle_at_var(--mouse-x,0)_var(--mouse-y,0),rgba(255,255,255,0.04),transparent_40%)]
          before:opacity-0 before:transition-opacity
          hover:before:opacity-100
          hover:shadow-[0_0_30px_rgba(217,78,30,0.15)]
          active:scale-[0.98]`}
      >
        <span className="relative z-10 text-white/90 font-medium">Download Report</span>
        <FiArrowRight 
          className="relative z-10 group-hover:translate-x-0.5 transition-transform text-white/90" 
        />
      </button>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setSaved(!saved)}
          className={`p-4 rounded-full border border-neutral-800 
            hover:bg-white/5 active:scale-[0.98] transition-all
            ${saved ? 'text-[#D94E1E] border-[#D94E1E]' : 'text-white'}`}
        >
          <FiBookmark className="w-4 h-4" />
        </button>
        <button 
          onClick={handleShare}
          className="p-4 rounded-full border border-neutral-800 
            hover:bg-white/5 active:scale-[0.98] transition-all"
        >
          <FiShare2 className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
} 