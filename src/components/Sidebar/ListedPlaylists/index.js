import { useEffect, useState } from 'react'
import { Link } from 'wouter';
import fetchData from '../../../services/fetchData'
import './styles.css'

function ListedPlaylist() {

  const [playlists, setPlaylists] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchData(
      'https://api.spotify.com/v1/me/playlists',
      '',
      'GET'
    ).then(res => setPlaylists(res.items ? res.items : []))
  }, [token])
  

  return (
    <ul className='sidebarPlaylists'>
      {playlists.map(playlist => {
        return <Link href={`/playlist/${playlist.id}`} key={playlist.id} className='sidebarPlaylistsItem'>
          <img src={playlist.images[0].url} alt={playlist.name} width='16' height='16' className='sidebarPlaylistsItemImg'/>
          {playlist.name}
          </Link>
      })}
    </ul>
  )
}

export default ListedPlaylist