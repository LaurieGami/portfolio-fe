import './App.scss';

import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import NavBar from './components/NavBar/NavBar';

// Pages
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
