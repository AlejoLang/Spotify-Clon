const fetchData = async (url, body, method) => {
  const TOKEN = JSON.parse(localStorage.getItem('token'))?.access_token ?? undefined;

  if(!TOKEN){ console.log('err'); return;}
  
  let response = await fetch((url + `${method === 'GET' ? '?' + body : ''}`), {
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