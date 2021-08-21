import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/project-1" exact component={Project1} />
      <Route path="/project-2" exact component={Project2} />
      <Route path="/project-3" exact component={Project3} />
      <Route path="/project-4" exact component={Project4} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;


