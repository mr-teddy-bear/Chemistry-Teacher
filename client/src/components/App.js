import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import HomeWorkChemistry from "./HomeWorkChemistry";
import QuestionsGroup from "./QuestionsGroup";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chemistry" component={HomeWorkChemistry} />
      <Route path="/chemistryQuestion" component={QuestionsGroup} />
    </Switch>
  );
}

export default App;
