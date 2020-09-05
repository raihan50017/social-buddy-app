import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PostPage from './components/PostPage/PostPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
             <PostPage></PostPage>
          </Route>
          <Route path='/post-details/:postId'>
            <PostDetail></PostDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
