import { useState, useEffect } from 'react';
import './styles.css'
import TracksList from '../../components/TracksList';
import PlaylistInfo from '../../components/PlaylistInfo';
import fetchData from '../../services/fetchData';

function Playlist({params}) {
  const playlistId = params.playlistid;
  console.log(params)
  
  const [playlistInfo, setPlaylistInfo] = useState({})

  useEffect(() => {
    fetchData(
      playlistId === 'liked' ? 'https://api.spotify.com/v1/me/tracks' : 'https://api.spotify.com/v1/playlists/' + playlistId,
      'limit=50',
      'GET'
    ).then(res => { setPlaylistInfo(res ? res : {})})
  }, [playlistId])

  console.log(playlistInfo)
  return (
    <div className='playlistDiv'>
      <PlaylistInfo playlistInfo={playlistInfo} type={playlistId}/>
      <TracksList playlistTracks={playlistInfo} type={playlistId}/>
    </div>
  )
}

export default Playlist