import React, { useEffect, useState } from 'react'
import RelevantResult from './RelevantResult';
import ResultsMainTracks from './ResultsMainTracks';
import './styles.css'

function ListOfResults({searchResults}) {

  const [results, setResults] = useState({})

  useEffect(() => {
    setResults(searchResults);
    console.log('list')
    console.log(searchResults)
  }, [searchResults])

  return (
    <div className='listOfResultsDiv'>
      <RelevantResult result={results?.tracks?.items[0]} />
      <ResultsMainTracks results={results?.tracks?.items?.slice(1)} />
    </div>
  )
}

export default ListOfResults