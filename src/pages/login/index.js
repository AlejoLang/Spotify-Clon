import React from 'react'
import './styles.css'
import generateCodeVerifier from '../../services/getCodeVerifier.js'
import getCodeChallenge from '../../services/getCodeChallenge.js'

let CODE_CHALLENGE
const handleRes = async data => {
  CODE_CHALLENGE = data;
  document.querySelector('.loginLink').href += `&code_challenge=${CODE_CHALLENGE}`
}

function Login() {

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID,
        REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI,
        ENDPOINT = process.env.REACT_APP_ENDPOINT,
        RESPONSE_TYPE = process.env.REACT_APP_RESPONSE_TYPE,
        SCOPE = 'user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming playlist-read-private user-follow-read user-library-read user-read-email user-read-private'

  
  getCodeChallenge(generateCodeVerifier(64)).then(res => handleRes(res));

  return (
    <div className='loginDiv'>
      <img src='/images/logos/Spotify-Logo.png'
          alt='Spotify Logo'
          className='spotifyLogo'
      />
      <h1 className='logTitle'>Log In</h1>
      <p className='logDesc'>You need to login in order to use this App</p>
      <a 
        href={`${ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}&code_challenge_method=S256`}
        className='loginLink'
      >
        Login
      </a>
    </div>
  )
}

export default Login