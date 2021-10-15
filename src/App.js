import './App.scss';

import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import PageWrapper from './components/PageWrapper/PageWrapper';

// Pages
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const [show, setShow] = useState(false);

  return (
      <BrowserRouter>
        <ScrollToTop />
        <Header show={show} setShow={setShow}/>
        <Navigation show={show} setShow={setShow}/>
        <PageWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <Footer/>
        </PageWrapper>
      </BrowserRouter>
  );
}

export default App;
