import React from 'react';
import './App.css';
import { LoginPage } from './login/Login';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App flex justify-center align-center" style={{'backgroundColor': '#7547ab'}}>
      <Route path={'/login'}>
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
