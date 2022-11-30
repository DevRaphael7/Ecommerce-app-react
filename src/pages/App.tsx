import React from 'react';
import './App.css';
import { LoginPage } from './login/Login';
import { Route, Redirect } from 'react-router-dom'
import { HomePage } from './homepage/HomePage';
import { MainHeader } from './components/MainHeader/MainHeader';
import { DetailPage } from './DetailPage/DetailPage';
import { Provider } from 'react-redux';
import store from '../redux/store';


function App() {

  return (
    <Provider store={store}>
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
          <Route path={'/detail/:type'}>
            <DetailPage />
          </Route>
        </main>
      </div>
    </Provider>
  );
}

export default App;
