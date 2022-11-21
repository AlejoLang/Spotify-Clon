async function getCodeChallenge(codeVerifier) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(codeVerifier),
  );
  console.log(codeVerifier)
  console.log(btoa(String.fromCharCode(...new Uint8Array(digest)))
  .replaceAll('=', '')
  .replaceAll('+', '-')
  .replaceAll('/', '_'))
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replaceAll('=', '')
    .replaceAll('+', '-')
    .replaceAll('/', '_');
  
}


export default getCodeChallenge;