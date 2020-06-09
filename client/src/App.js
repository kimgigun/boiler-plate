import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/registerPage" component={RegisterPage}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home 집이졍</h2>;
}

function About() {
  return <h2>About 어바웃이졍</h2>;
}

function Users() {
  return <h2>Users 유저죵</h2>;
}

export default App;
