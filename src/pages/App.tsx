import React from 'react';
import './App.css';
import { LoginPage } from './login/Login';
import { Route, Redirect } from 'react-router-dom'
import { HomePage } from './homepage/HomePage';
import { MainHeader } from './components/MainHeader/MainHeader';


function App() {

  return (
    <div style={{'backgroundColor': '#7547ab'}}>
      <Route path={"/"} exact>
        <Redirect to="/homepage" />
      </Route>
      <Route path={'/login'}>
        <LoginPage />
      </Route>
      <main>
        <MainHeader />
        <Route path={'/homepage'}>
          <HomePage />
        </Route>
      </main>
    </div>
  );
}

export default App;
