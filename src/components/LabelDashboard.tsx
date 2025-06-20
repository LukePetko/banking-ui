import { getLabel } from "@/mock";
import { useTenant } from "@/TenantContext";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const LabelDashboard = () => {
  const { setCurrentLabel, currentLabel } = useTenant();
  const { labelId, tenantId } = useParams();

  useEffect(() => {
    if (!currentLabel && labelId && tenantId) {
      setCurrentLabel(getLabel(tenantId, labelId));
    }
  }, [labelId]);

  return <><h1 className="text-4xl font-bold mb-6">Welcome, {currentLabel?.name}!</h1></>;
};

export default LabelDashboard;
