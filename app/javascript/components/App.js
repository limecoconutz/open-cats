import React from "react";
import { Route, Switch } from 'react-router-dom'

import Cat from "./Cat/Cat";
import Cats from "./Cats/Cats";

const App = () => {
  return(
    <Switch>
      <Route exact path="/" component={Cats} />
      <Route exact path="/cats/:slug" component={Cat} />
    </Switch>
  )
}

export default App;