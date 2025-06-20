import { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import Topbar from "./Topbar";
import { useTenant } from "@/TenantContext";
import { getLabel } from "@/mock";

const DashboardLayout = () => {
  const { labelId, tenantId } = useParams();
  const { setCurrentLabel, currentLabel } = useTenant();

  useEffect(() => {
    if (!labelId && currentLabel) {
      setCurrentLabel(undefined);
    }

    if (!currentLabel && labelId && tenantId) {
      setCurrentLabel(getLabel(tenantId, labelId));
    }
  }, [labelId]);

  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
