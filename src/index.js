import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import { Wrapper } from "@googlemaps/react-wrapper";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Wrapper 
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
          version="weekly"
          libraries={["places"]}
        >
        <Route render={() => <App />} />
      </Wrapper>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
