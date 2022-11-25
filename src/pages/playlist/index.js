import React, { useEffect, useState} from 'react'
import './styles.css'
import fetchData from '../../services/fetchData';
import Track from '../../components/Track';

function Playlist({params}) {
  const playlistId = params.playlistid;
  console.log(params)
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    console.log('useEffect Playlists')
    fetchData(
      playlistId === 'liked' ? 'https://api.spotify.com/v1/me/tracks' : 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks',
      'limit=50',
      'GET'
    ).then(res => setTracks(res.items ? res.items : []))
  }, [playlistId])

  return (
    <div>
      {tracks.map(item =>
        <Track 
          name={item.track.name}
          img={item.track.album.images[0].url}
          artist={item.track.artists[0].name}
        />)}
    </div>
  )
}

export default Playlist