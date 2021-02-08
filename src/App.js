import React from 'react'
import HomePage from './pages/HomePage'
import ContactMe from './pages/ContactMe'
import AboutMe from './pages/AboutMe'
import Nav from './components/Nav'
import GlobalStyle from './components/GlobalStyle'
import { Switch, Route, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();

  return (
    <div> 
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
              <Route path="/" exact>
                  <HomePage />
              </Route>
              <Route path="/work" exact>
                 <AboutMe />
              </Route>
              <Route path="/contact">
                  <ContactMe />
              </Route>
          </Switch>
      </AnimatePresence>         
    </div>
  );
}

export default App;
