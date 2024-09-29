import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <RouteMap/>
    </BrowserRouter>
  );
};

export default App;
