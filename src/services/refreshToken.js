const refreshToken = async (code) => {

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  const REFRESH_TOKEN = JSON.parse(window.localStorage.getItem('token')).refresh_token

  let data = await fetch('https://accounts.spotify.com/api/token', {
    body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}&client_id=${CLIENT_ID}`,
    headers:{
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })

  const json = await data.json()
  return await json;
}

export default refreshToken