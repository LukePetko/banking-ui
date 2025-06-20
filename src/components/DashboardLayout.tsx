import React from "react";
import { Outlet } from "react-router";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <>
      <Topbar />
      <div className="h-full w-full flex flex-col mt-12">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
