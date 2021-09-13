import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import "./App.css";
import Home from "./pages/home/Home";
import Fav from "./pages/Fav/Fav";

import Header from "./components/header";
import Footer from "./components/footer";

import { AppProvider } from "./context/AppContext";
import Search from "./pages/search";

const NotFoundRedirect = () => <Redirect to="/" />;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/fav" component={Fav} />
            <Route component={NotFoundRedirect} />
          </Switch>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
