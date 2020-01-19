import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import * as serviceWorerk from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};
export default App;
