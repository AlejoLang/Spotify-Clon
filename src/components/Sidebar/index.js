import React from 'react'
import './styles.css'
import { Link } from 'wouter'
import { FaHome, FaSearch, FaHeart } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'

function Sidebar() {
  return (
    <div className='sidebar'>
      <img src="/images/logos/Spotify-Logo.png" 
          alt="Spotify Logo" 
          className='sidebarSpotifyLogo'
      />
      <div className="sidebarLinks">
        <Link href='/'>
          <FaHome />
          Inicio
        </Link>
        <Link href='/search'>
          <FaSearch />
          Search
        </Link>
        <Link href='/playlists'>
          <GiBookshelf />
          Playlists
        </Link>
      </div>
      <div className="sidebarOtherLinks">
        <Link href='/playlists/liked'>
          <FaHeart />
          Liked
        </Link>
      </div>
      <div className="sidebarPlaylists">
        <Link href='/playlists/asd'>
          asdas
        </Link>
        <Link href='/playlists/asd'>
          asdas
        </Link>
        <Link href='/playlists/asd'>
          asdas
        </Link>
      </div>
    </div>
  )
}

export default Sidebar