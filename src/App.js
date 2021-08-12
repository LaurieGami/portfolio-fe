import './App.scss';

import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

// Pages
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [show, setShow] = useState(false);

  return (
      <BrowserRouter>
        <Header show={show} setShow={setShow}/>
        <Navigation show={show}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
