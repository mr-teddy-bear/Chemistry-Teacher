import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import HomeWorkChemistry from "./HomeWorkChemistry";
import QuestionsGroup from "./QuestionsGroup";
import Admin from "./Admin";
import AdminStudents from "./AdminStudents";
import AdminClasses from "./AdminClasses";
import AdminQuestions from "./AdminQuestions";
import AdminProgress from "./AdminProgress";
import AdminTests from "./AdminTests";
import AdminNewResults from "./AdminNewResults";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/chemistry" component={HomeWorkChemistry} />
      <Route path="/chemistryQuestion" component={QuestionsGroup} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/students" component={AdminStudents} />
      <Route exact path="/admin/razdels" component={AdminClasses} />
      <Route exact path="/admin/test" component={AdminTests} />
      <Route exact path="/admin/questions" component={AdminQuestions} />
      <Route exact path="/admin/progress" component={AdminProgress} />
      <Route exact path="/admin/new" component={AdminNewResults} />
    </Switch>
  );
}

export default App;
