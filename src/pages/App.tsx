import React from 'react';
import './App.css';
import { LoginPage } from './login/Login';

function App() {
  return (
    <div className="App flex justify-center align-center" style={{'backgroundColor': '#7547ab'}}>
      <LoginPage />
    </div>
  );
}

export default App;
