import { useEffect, useState } from 'react'
import { ImSearch } from 'react-icons/im'
import ListOfResults from 'components/ListOfResults'
import fetchData from 'services/fetchData'
import { useLocation } from 'wouter';

function Search({params}) {

  const searchQuery = params.searchQuery;
  const [searchResults, setSearchResults] = useState({})
  const [path, goToPath] = useLocation()

  useEffect(() => {
    if(searchQuery){
      fetchData(
        'https://api.spotify.com/v1/search',
        `q=${searchQuery}&type=album,artist,playlist,track`,
        'GET'
      ).then(res => {console.log('hola ', res);setSearchResults(Object.keys(res).length >= 1 ? res : {})})
    }
  }, [searchQuery])
  

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = document.querySelector('.searchDiv-form-input').value
    goToPath('/search/' + query)
  }

  return (
    <div className="searchDiv">
      <form onSubmit={handleSearchSubmit} className="searchDiv-form">
        <input type="text" className="searchDiv-form-input" placeholder="Insert a song / artist / etc. name"/>
        <button><ImSearch /></button>
      </form>
      <ListOfResults searchResults={searchResults}/>
    </div>
  )
}

export default Search