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
    }).then(res => res.json())

  console.log('---------------------')
  console.log('Fetch response')
  console.log(response)
  console.log('---------------------')

  return response
}

export default fetchData