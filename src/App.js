
import React from "react";
import { Route,Routes } from "react-router-dom";
import Layout from "./Componets/Layout";
import SearchBox from "./Componets/SearchBox";
import Homepage from "./pages/Homepage";
import Productdetils from "./pages/Productdetils";

function App() {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Layout>
              <SearchBox />
              <Homepage />
            </Layout>
          </>
        }
      />
      <Route path="/:id" element={<Productdetils />} />
    </Routes>
  </>
  );
}

export default App;
