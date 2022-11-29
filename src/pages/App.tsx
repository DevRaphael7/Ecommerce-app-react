import React from 'react';
import './App.css';
import { LoginPage } from './login/Login';
import { Route } from 'react-router-dom'
import { HomePage } from './homepage/HomePage';
import { MainHeader } from './components/MainHeader/MainHeader';


function App() {

  return (
    <div style={{'backgroundColor': '#7547ab'}}>
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
