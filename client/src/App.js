import React from 'react';



import { BrowserRouter as Router, Route } from "react-router-dom";


// Components Imported Up Here
import MainLandingPage from "./component/MainLandingPage";
import Navbar from "./component/Navbar";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <div class="container mb-4">
            <Route path="/" exact component={MainLandingPage} />
          </div>
      </Router>
    </div>
  );
}

export default App;
