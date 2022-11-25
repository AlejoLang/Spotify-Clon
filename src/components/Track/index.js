import React from 'react'

function Track({name, img, artist}) {
  return (
    <li>
      <img src={img} alt={name} width='20' height={20}/>
      <div>
        <p>{name}</p>
        <p>{artist}</p>
      </div>
    </li>
  )
}

export default Track