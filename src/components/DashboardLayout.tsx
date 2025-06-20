import React from "react";
import { Outlet } from "react-router";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  return (
    <>
      <Topbar />
      <div className="h-full w-full flex flex-col mt-12 p-4">
        <div className="w-full max-w-screen-xl mx-auto mt-12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
