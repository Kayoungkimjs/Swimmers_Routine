import { BrowserRouter, Route, Switch } from "react-router-dom";
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
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
          <Route>
            <Empty />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;