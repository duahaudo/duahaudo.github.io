import './App.scss';

import React from "react";
import { AppContext, VIEW_HOME, VIEW_README } from "./constance"

import Header from "./components/Header"
import Menu from "./components/Menu"
import Home from "./components/Home"
import ReadMe from "./components/ReadMe"

function App() {

  const [view, setView] = React.useState(VIEW_HOME);

  return (
    <AppContext.Provider value={{ view, setView }}>
      <div className="app-wrapper">
        <Header />
        <Menu />

        <div className="main-workspace">
          {view === VIEW_HOME && <Home />}
          {view === VIEW_README && <ReadMe />}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
