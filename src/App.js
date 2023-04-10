import React, { useState, useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import Body from "./Components/Body";
import Auth from "./Components/Auth";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useUserAuth } from "./Context/AuthContext";
const App = () => {
  const themeHook = useState("light");
  const { user } = useUserAuth();
  console.log("USER: ", user);

  return (
    <ThemeContext.Provider value={themeHook}>
      {user ? <Body /> : <Auth />}
    </ThemeContext.Provider>
  );
};

export default App;
