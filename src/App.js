import { useEffect, useContext } from 'react';
import './App.css';
import { Route, Link, useLocation} from 'wouter'
import { TokenContext } from './context/TokenContext';
import Main from './pages/main'
import Login from './pages/login'
import getSpotifyToken from './services/getToken';
import refreshToken from './services/refreshToken';

function App() {

  const [path, goToPath] = useLocation()
  const {token, setToken} = useContext(TokenContext)

  let savedToken = window.localStorage.getItem('token')

  const handleTokenResponse = res => {

    console.log(res)
    if(res?.error){return;}
    window.localStorage.setItem('token', JSON.stringify(res));
    setToken(res);
    return true;
  } 

  useEffect(() => {

    let urlCode = window.location.search
    let code;

    if(!savedToken && !urlCode) {
      goToPath('/login')
    }

    if(!savedToken && urlCode) {
      code = urlCode.substring(1)
                    .split("&")
                    .find(elem => elem.startsWith("code"))
                    .split("=")[1]

      getSpotifyToken(code).then(data => handleTokenResponse(data));
    }

    if(savedToken) {
      setToken(JSON.parse(savedToken))
      refreshToken(savedToken).then(res => handleTokenResponse(res));
    }

  },[])

  setInterval(() => {refreshToken(savedToken).then(res => handleTokenResponse(res))}, 1000 * 60 * 60)

  return (
    <div className="App">
      <Route path='/' component={Main}/>
      <Route path='/login' component={Login}/>
    </div>
  );
}

export default App;