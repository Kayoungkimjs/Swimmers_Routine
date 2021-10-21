import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact Path="/">
          <DayList />
        </Route>
        <Route Path="/">
          <Day />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
