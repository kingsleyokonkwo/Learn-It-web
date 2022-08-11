import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Advantage from "./routes/Advantage";
import Formm from "./routes/Formm";
import HireRoute from "./routes/HireRoute";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";



function App() {
  

  return (
    <div>
      <Routes basename="/Learn-It-web">
        <Route path="/" element={<Home />} />
        <Route path="/advantage" element={<Advantage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-up" element={<Formm />} />
        <Route path="/hire" element={<HireRoute />} />
      </Routes>
    </div>
  );
}

export default App;
