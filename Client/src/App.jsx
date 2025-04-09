import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layouts/UserLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        {/* UserLayout */}
      </Route>

      <Route>{/* Admin Routes */}</Route>
    </Routes>
  );
};

export default App;
