import { useState, useEffect } from 'react'
import Track from '../Track'
import './styles.css'

function TracksList({playlistTracks, type}) {

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    if(type !== 'liked'){
      setTracks(playlistTracks?.tracks?.items ? playlistTracks.tracks?.items : [])
      return;
    }

    setTracks(playlistTracks?.items ? playlistTracks.items : [])

  }, [playlistTracks, type])

  return (
    <div className="tracksListDiv">
      <h2 className="tracksListDiv-title">Songs: </h2>
      <ul className='tracksList'>
        {tracks.map(item =>
          <Track 
            name={item.track.name}
            img={item.track.album.images[0].url}
            artist={item.track.artists[0].name}
            duration={item.track.duration_ms}
            key={item.track.id}
          />)}
      </ul>
    </div>
  )
}

export default TracksList