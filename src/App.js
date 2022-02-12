import "./App.css";
import React, { useState } from "react";
import Login from "./components/login/login";
import FormComponent from "./components/register/register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import OneMovie from "./components/movies/movies";
import Details from "./components/details/detail";
import notfound from './components/notfound/notfound';
import Specific from './components/specificDetail/specific';
import favorite from './components/favorite/favorite'
import { LanguageContext } from "./context/languageContext";
function App() {
  const [contextLanguage, setContextLanguage] = useState('en-US');
  return (
    <LanguageContext.Provider value={{ contextLanguage, setContextLanguage }}>
      <BrowserRouter>
        <NavBar />
        <br />
        <Switch>
          <Route path={"/"} exact component={FormComponent}></Route>
          <Route path={"/login"} exact component={Login}></Route>
          <Route path={"/OneMovie/:id"} exact component={OneMovie}></Route>
          <Route path={"/details"} exact component={Details}></Route>
          <Route path={"/Specific"} exact component={Specific}></Route>
          <Route path={"/favorites"} exact component={favorite}></Route>
          <Route path={"*"} exact component={notfound}></Route>
        </Switch>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
