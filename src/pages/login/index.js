import React from 'react'
import './styles.css'

function Login() {

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID,
        REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI,
        ENDPOINT = process.env.REACT_APP_ENDPOINT,
        RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE

  return (
    <div className='loginDiv'>
      <img src='/images/logos/Spotify-Logo.png'
          alt='Spotify Logo'
          className='spotifyLogo'
      />
      <h1 className='logTitle'>Log In</h1>
      <p className='logDesc'>You need to login in order to use this App</p>
      <a 
        href={`${ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        className='loginLink'
      >
        Login
      </a>
    </div>
  )
}

export default Login