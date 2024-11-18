import { useState } from 'react'

const mockResults = [
  { title: 'Executive Summary', type: 'chapter', page: '04' },
  { title: 'AI Market Growth', type: 'section', page: '15' },
  { title: 'Industry Analysis', type: 'chapter', page: '42' },
  { title: 'Future Predictions', type: 'section', page: '78' },
  { title: 'AI Implementation', type: 'chapter', page: '96' },
  { title: 'Case Studies', type: 'section', page: '124' }
]

export function useMockSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.length > 0) {
      setSearchResults(mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase())
      ))
    } else {
      setSearchResults([])
    }
  }

  return {
    searchQuery,
    searchResults,
    handleSearch,
    setSearchQuery
  }
} 