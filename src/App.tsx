import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 120 });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  );
};

export default App;
