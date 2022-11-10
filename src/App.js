import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { APIContextProvider } from "./APIContext";
import "./css/App.css"

//Components

import Header from "./components/Header"
import Home from "./components/Home"
import Recipe from "./components/Recipe"
import Error from "./components/Error"

// function to scroll to top when you open some recipe

import ScrollToTop from "./components/ScrollToTop";



function App() {

  return (
    <Router>
      <ScrollToTop />
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
