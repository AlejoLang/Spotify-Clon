import React from 'react'
import './styles.css'

function Track({name, img, artist, duration}) {

  const convertMsToMinutes = (time) => {
    const minutes = Math.floor(time / 60000)
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <li className='trackList-item'>
      <img src={img} alt={name} width='20' height={20} className='trackList-item-img'/>
      <div className='trackList-item-info'>
        <p className='trackList-item-info-name'>{name}</p>
        <p className='trackList-item-info-artist'>{artist}</p>
      </div>
      <div className="trackList-item-duration">{convertMsToMinutes(duration)}</div>
    </li>
  )
}

export default Track