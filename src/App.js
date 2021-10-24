import { BrowserRouter, Route, Switch } from "react-router-dom";
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";
import CreateRoutine from "./components/CreateRoutine";
import CreateDay from "./components/CreateDay";
import Empty from "./components/Empty";
import styled from "styled-components"


function App() {
  return (
    <BrowserRouter>
      <AppContainer>
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
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  
`;

export default App;