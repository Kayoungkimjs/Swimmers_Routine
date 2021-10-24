import { BrowserRouter, Route, Switch } from "react-router-dom";
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import CreateRoutine from "./components/CreateRoutine";
import CreateDay from "./components/CreateDay";
import Empty from "./components/Empty";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_routine">
            <CreateRoutine />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <Empty />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;