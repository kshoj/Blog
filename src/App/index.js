import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "src/routes";
import AppProvider from "src/context";
import NavBar from "src/components/Navigation";
import GlobalStyle from "src/theme/Global";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes />
          </main>
        </div>
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
};

export default App;
