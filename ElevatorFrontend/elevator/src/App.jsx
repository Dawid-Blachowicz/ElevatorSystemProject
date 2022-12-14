import { Container } from "@mui/system";
import React from "react";
import { Route, } from "react-router-dom";
import SetupPage from "./screens/SetupPage"
import SimulationPage from "./screens/SimulationPage"
import { Routes } from "react-router-dom";

const  App = () => {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<SetupPage />} />
        <Route exact path="/simulation" element={<SimulationPage />} />
      </Routes>
    </Container>
  );
}

export default App;
