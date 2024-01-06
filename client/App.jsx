
import React, { useState } from "react";
import MainContainer from './containers/MainContainer.jsx';
import Login from "./components/Login.jsx";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  if (!isLogged) {
    return (
      <Login setUser={setUser} setIsLogged={setIsLogged} setIsUserLoading={setIsUserLoading}/>
    )
  }

  return(
    <div className="h-screen w-screen flex">
      <MainContainer user={user} isUserLoading={isUserLoading} setIsLogged={setIsLogged}/>
    </div>
  )


}

export default App;