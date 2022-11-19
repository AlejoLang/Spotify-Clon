import { useEffect, useContext } from 'react';
import './App.css';
import { Route, Link, useLocation} from 'wouter'
import { TokenContext } from './context/TokenContext';
import Main from './pages/main'
import Login from './pages/login'


function App() {

  const [path, goToPath] = useLocation();
  const {token, setToken} = useContext(TokenContext)

  useEffect(() => {
    let token = window.localStorage.getItem('token');
    const hash = window.location.hash;

    if(!token && !hash) {
      goToPath('/login')
    }

    if(!token && hash) {
      token = hash.substring(1)
                  .split("&")
                  .find(elem => elem.startsWith("access_token"))
                  .split("=")[1]
      
      window.location.hash = ''
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  })

  console.log(token)

  return (
    <div className="App">
      <Route path='/' component={Main}/>
      <Route path='/login' component={Login}/>
    </div>
  );
}

export default App;
