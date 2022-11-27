import React, { useEffect, useState } from 'react'
import RelevantResult from './RelevantResult';

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
      {results?.tracks?.items?.map(item => <p>{item.name}</p>)}
    </div>
  )
}

export default ListOfResults