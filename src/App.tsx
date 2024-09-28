import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import RouteMap from "./routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RouteMap/>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
