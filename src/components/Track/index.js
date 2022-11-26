import React from 'react'
import './styles.css'

function Track({name, img, artist}) {
  return (
    <li className='trackList-item'>
      <img src={img} alt={name} width='20' height={20} className='trackList-item-img'/>
      <div className='trackList-item-info'>
        <p className='trackList-item-info-name'>{name}</p>
        <p className='trackList-item-info-artist'>{artist}</p>
      </div>
    </li>
  )
}

export default Track