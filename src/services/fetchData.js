const fetchData = async (url, body, method) => {
  const TOKEN = JSON.parse(localStorage.getItem('token')).access_token;

  if(!TOKEN){ alert('No token'); return;}

  let response;
  console.log(TOKEN, url, body, method);

  if(method === 'GET'){
    response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      method
    }).then(res => res.json());
  } else {
    response = await fetch(url, {
      headers: {
        'Aturhorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body,
      method
    }).then(res => res.json());
  }


  return response;
}

export default fetchData