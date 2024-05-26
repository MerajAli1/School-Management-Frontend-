import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../pages/Dashboard";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
