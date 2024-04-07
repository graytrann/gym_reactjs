import React from "react";
import Header from "../../Views/components/Header/Header";
import Footer from "../../Views/components/Footer/Footer";
import { Outlet, Navigate } from "react-router-dom";

export default function MainLayout() {
  const userIsnotLogin = localStorage.getItem("gymUser");

  if (!userIsnotLogin) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
