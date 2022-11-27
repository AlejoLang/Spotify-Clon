import './styles.css'
import GoBackButton from '../GoBackButton';
import { useEffect, useState } from 'react'

function PlaylistInfo({playlistInfo, type}) {

  const [playlistData, setPlaylistData] = useState({});

  useEffect(() => {
    if(type === 'liked') {
      setPlaylistData({name: 'Liked songs', img:''})
      return;
    }
    setPlaylistData(playlistInfo.name ? {name: playlistInfo?.name, img: playlistInfo?.images[0]?.url} : {})
  }, [playlistInfo, type])

  return (
    <div className='playlistInfo'>
      <GoBackButton />
      <img src={playlistData?.img} 
            alt={playlistData?.name} 
            className={`playlistInfo-img ${type === 'liked' ? 'likedType' : ''}`}
      />
      <h1 className='playlistInfo-name'>{playlistData?.name}</h1>
    </div>
  )
}

export default PlaylistInfo