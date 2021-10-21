import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import Empty from "./components/Empty";

function Routes() {
  return (
    <BrowserRouter>
     <div className="routes">
       <Header />
       <Switch>
         <Route exact Path="/">
           <DayList />
         </Route>
         <Route Path="/day/:day">
           <Day />
         </Route>
         <Route>
           <Empty />
         </Route>
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default Routes;
