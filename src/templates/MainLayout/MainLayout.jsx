import React from "react";
import Header from "../../Views/components/Header/Header";
import Footer from "../../Views/components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
