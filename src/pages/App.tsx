import React from 'react';
import './App.css';
import { LoginPage } from './login/Login';
import { Route } from 'react-router-dom'
import { HomePage } from './homepage/HomePage';


function App() {

  return (
    <div style={{'backgroundColor': '#7547ab'}}>
      <Route path={'/login'}>
        <LoginPage />
      </Route>
      <Route path={'/homepage'}>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
