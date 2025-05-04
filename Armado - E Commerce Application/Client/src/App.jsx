import React from "react";
import UserLayout from "./Components/Layout/UserLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User Layout */}

          <Route index element={<Home />} />
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </>
  );
};

export default App;
