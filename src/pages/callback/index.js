import React, { useEffect } from 'react'
import { useLocation } from 'wouter';
import getSpotifyToken from '../../services/getToken';

function Callback() {

  const [path, goToPath] = useLocation()

  const handleTokenResponse = async res => {
    console.log(res)
    if(res?.error){return;}
    window.localStorage.setItem('token', JSON.stringify(res))
    goToPath('/')
  } 

  useEffect(() => {
    const urlCode = new URL(window.location.href)
    console.log(window.location)
    let code = urlCode.search
                      .substring(1)
                      .split("&")
                      .find(elem => elem.startsWith("code"))
                      .split("=")[1]

      getSpotifyToken(code).then(data => handleTokenResponse(data));
  }, [])

  return (
    <div>Callback</div>
  )
}

export default Callback