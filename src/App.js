import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.js"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
export default App;
