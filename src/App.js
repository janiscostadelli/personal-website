import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import HomePage from "./Pages/Home/HomePage.js"
import ProjectsPage from "./Pages/Projects/ProjectsPage.js"
import AboutPage from "./Pages/About/AboutPage.js";
import ContactPage from "./Pages/Contact/ContactPage.js";

function App() {
  return (
    <ChakraProvider>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
    </ChakraProvider>
  )
}
export default App;
