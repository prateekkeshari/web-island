import { useState } from 'react'
import DynamicIsland from './components/DynamicIsland'
import Header from './components/Header'
import ActionButtons from './components/ActionButtons'
import Footer from './components/Footer'
import { useMockSearch } from './hooks/useMockSearch'
import { useDownload } from './hooks/useDownload'

function App() {
  // States
  const [islandState, setIslandState] = useState('nav')
  const { searchQuery, searchResults, handleSearch, setSearchQuery } = useMockSearch()
  const { progress, handleDownload } = useDownload({ islandState, setIslandState })
  const [saved, setSaved] = useState(false)

  return (
    <div className="h-screen bg-black text-white relative overflow-hidden flex flex-col">

      <DynamicIsland 
        islandState={islandState}
        setIslandState={setIslandState}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        progress={progress}
        handleSearch={handleSearch}
      />

      <main className="flex-1 flex items-center justify-center relative">
        <div className="flex flex-col items-center">
          <Header />
          <ActionButtons 
            handleDownload={handleDownload}
            islandState={islandState}
            saved={saved}
            setSaved={setSaved}
          />
        </div>
      </main>

      <Footer 
        handleDownload={handleDownload}
        islandState={islandState}
      />
    </div>
  )
}

export default App
