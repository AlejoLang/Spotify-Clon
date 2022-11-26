import React, { useEffect, useState } from 'react'

function ListOfResults({searchResults}) {

  const [results, setResults] = useState({})

  useEffect(() => {
    setResults(searchResults);
    console.log('list')
    console.log(searchResults)
  }, [searchResults])

  return (
    <div>
      {results?.tracks?.items?.map(item => <p>{item.name}</p>)}
    </div>
  )
}

export default ListOfResults