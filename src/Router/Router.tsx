import { Dashboard } from "../UI/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { Authentication } from "../UI/Authentication";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
