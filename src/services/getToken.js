const getSpotifyToken = async (code) => {

  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI,
        CLIENT_ID = process.env.REACT_APP_CLIENT_ID,
        CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET,
        AUTH_CODE = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
  
  const verifier = window.localStorage.getItem('verifier');

  let data = await fetch('https://accounts.spotify.com/api/token', {
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}&code_verifier=${verifier}`,
    headers:{
      "Content-Type": 'application/x-www-form-urlencoded',
      "Authorization": `Basic ${AUTH_CODE}`
    },
    method: 'POST'
  })

  const json = await data.json()
  return await json;
}

export default getSpotifyToken