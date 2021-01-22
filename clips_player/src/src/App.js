import './App.scss';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AppContext, VIEW_HOME, VIEW_PRIVACY, VIEW_README } from "./constance"

import Header from "./components/Header"
import Menu from "./components/Menu"
import Home from "./components/Home"
import ReadMe from "./components/ReadMe"
import Footer from "./components/Footer"
import Privacy from "./components/PrivacyPolicy"

function App() {

  return (
    <Router>
      <AppContext.Provider value={{}}>
        <div className="app-wrapper">
          <Header />
          <Menu />

          <div className="workspace">
            <div className="main-workspace">

              <Switch>
                <Route path={VIEW_HOME} exact>
                  <Home />
                </Route>
                <Route path={VIEW_PRIVACY}>
                  <Privacy />
                </Route>
                <Route path={VIEW_README}>
                  <ReadMe />
                </Route>
              </Switch>

              {/* {view === VIEW_HOME && <Home />}
              {view === VIEW_PRIVACY && <Privacy />}
              {view === VIEW_README && <ReadMe />} */}
            </div>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
