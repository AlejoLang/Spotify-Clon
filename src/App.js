import { useEffect, useState} from 'react';
import './App.css';
import { Route, useLocation, Switch} from 'wouter'
import Main from './pages/main'
import Login from './pages/login'
import refreshToken from './services/refreshToken';
import search from './pages/search';
import Sidebar from './components/Sidebar';
import Callback from './pages/callback';
import Playlist from './pages/playlist'

function App() {

  const [path, goToPath] = useLocation()

  let savedToken = window.localStorage.getItem('token')
  let url = window.location.pathname;

  useEffect(() => {

    const handleTokenResponse = res => {
      console.log(res)
      if(res?.error){return;}
      window.localStorage.setItem('token', JSON.stringify(res))
      return true;
    } 

    if(!savedToken && url !== '/callback') {
      goToPath('/login')
    }

    if(savedToken) {
      window.localStorage.setItem('token', savedToken)
      refreshToken(savedToken).then(res => handleTokenResponse(res));
    }

    setInterval(() => {refreshToken(savedToken).then(res => handleTokenResponse(res))}, 1000 * 60 * 60)
  }, [savedToken, goToPath])
  
  return (
    <div className="App">
      <Switch>
        <Route path='/callback' component={Callback} />
        <Route path='/login' component={Login}/>

        <div className="mainApp">
          <Sidebar />
          <Route path='/' component={Main}/>
          <Route path='/search' component={search}/> 
          <Route path='/playlist/:playlistid' component={Playlist}/>
        </div>
      </Switch>
    </div>
  );
}

export default App;