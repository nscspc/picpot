import React from "react";
import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import {BrowserRouter as Router , Route , Redirect , Switch} from "react-router-dom";
import MainNavigation from "./common/components/Navigation/MainNavigation";

const App = () => {
  // return( 
  //   <div>
  //     <Users/>
  //     <h1>Hello World Ji</h1>
  //   </div>
  // );

  return (
  <Router>

    <MainNavigation/>

    <Switch>

    <Route path = "/" exact>
      <Users/>
    </Route>

    <Route path = "/location/new" exact>
      <NewLocation/>
    </Route>

    <Redirect to = "/" />

    </Switch>

  </Router>
  );

}
export default App;