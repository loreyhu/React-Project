import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { APIContextProvider } from "./APIContext";
import "./css/App.css"

//Components

import Header from "./components/Header"
import Home from "./components/Home"
import Recipe from "./components/Recipe"
import Error from "./components/Error"



function App() {

  return (
    <Router>
      <div className="App">

        <Header />

        <APIContextProvider>
          <Routes>  

              <Route exact path="/" element={<Home />} />
                
              <Route path={"/recipe/:id"} element={<Recipe />} />

              <Route path={"*"} element={<Error />} />

          </Routes>
        </APIContextProvider>

      </div>
    </Router>  
  );
}

export default App;
