import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className="relative">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 justify-center"
        >
          <span className="bg-white/5 text-[#D94E1E] font-medium text-sm px-4 py-2 rounded-full">
            Annual Report
          </span>
          <span className="text-neutral-500 text-sm">December 2024</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]"
        >
          The State of AI
          <span className="text-[#D94E1E] block mt-2">2025 Forecast</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed"
        >
          An analysis of AI trends, breakthrough tech, and insights.
        </motion.p>
      </div>
    </div>
  )
} 