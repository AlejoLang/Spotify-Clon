const fetchData = async (url, body, method) => {
  const TOKEN = JSON.parse(localStorage.getItem('token'))?.access_token ?? undefined;

  if(!TOKEN){ console.log('err'); return;}

  console.log(TOKEN, url, body, method);

  
  let response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: method === 'GET' ? null : body,
      method
    }).then(res => {console.log(res); return res.json()});

  console.log(response);

  return response;
}

export default fetchData