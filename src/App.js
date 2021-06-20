import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import HomePage from "./Pages/Home/HomePage.js"
import ProjectsPage from "./Pages/Projects/ProjectsPage.js"

function App() {
  return (
    <ChakraProvider>
        <HomePage />
        <ProjectsPage />
    </ChakraProvider>
  )
}
export default App;
