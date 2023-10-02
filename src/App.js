import React, { useState , useCallback } from "react";
import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import {BrowserRouter as Router , Route , Redirect , Switch} from "react-router-dom";
import MainNavigation from "./common/components/Navigation/MainNavigation";
import UserLocations from "./locations/pages/UserLocations";
import Login from "./users/pages/Login";
import { LoginContext } from "./common/components/context";

const App = () => {
  // return( 
  //   <div>
  //     <Users/>
  //     <h1>Hello World Ji</h1>
  //   </div>
  // );

  const [userID, setUserID]=useState(null);

  const [isLoggedIn , setIsLoggedIn] = useState(false); // initially the state of login is false.
  
  const login = useCallback((uid) => { // useCallback is also a hook , when a function is called then the function is executed , but while using useCallback hook that function will not execute , instead the previous result of the function will kept stored in cache memory , and it will retrieve that if the previous value is not changed. And where ever we need the login info we need to define these method again and again.
    setUserID(uid);
    setIsLoggedIn(true);
  } , []); // We have to pass null array :- [] , to remove this warning or issue -> "React Hook useCallback does nothing when called with only one argument. Did you forget to pass an array of dependencies?".

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserID(null);
  } , []);

  let validroutes;

  if(isLoggedIn){
    validroutes=(
      <Switch>
        <Route path ="/" exact>
          <Users />   
        </Route>
        <Route path="/:userid/locations">
          <UserLocations/>
        </Route>
        <Route path="/locations/new" exact>
          <NewLocation/>
        </Route>
        <Redirect to="/" />
      </Switch>

    );
    
  }
  else{
    validroutes=(
      <Switch>
        <Route path ="/" exact>
          <Users />
        </Route>
        <Route path="/login" exact>  
          <Login/>
        </Route>
        <Redirect to="/login" />
      </Switch>
    )
  }

  return (
  <LoginContext.Provider value = {
    {
      isLoggedIn : isLoggedIn,
      userID: userID,
      login : login,
      logout : logout,
    }
  }>
  <Router>

    <MainNavigation/>

    <main>
      {validroutes}
    {/* <Switch>

    <Route path = "/" exact>
      <Users/>
    </Route>

    <Route path = "/:userid/locations" exact>
      <UserLocations/>
    </Route>

    <Route path = "/locations/new" exact>
      <NewLocation/>
    </Route>

    <Route path = "/login" exact>
      <Login/>
    </Route>

    <Redirect to = "/" />

    </Switch> */}
    </main>

  </Router>
  </LoginContext.Provider>
  );

}
export default App;