import { useTenant } from "@/TenantContext";
import React from "react";
import { Input } from "./ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

const TenantSettings = () => {
  const { currentTenant } = useTenant();
  const navigate = useNavigate();
  return (
    <form className="w-full max-w-lg mx-auto flex flex-col gap-4 pt-24">
      <h1 className="text-4xl font-bold mb-6">
        {currentTenant?.name} Settings
      </h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name</label>
          <Input value={currentTenant?.name} disabled />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Country</label>
          <Input value={currentTenant?.country ?? "N/A"} disabled />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Logo</label>
          <div className="flex gap-2 items-center">
            <Input type="file" accept="image/*" disabled />
            {currentTenant?.logo && (
              <Tooltip>
                <TooltipTrigger>
                  <img src={currentTenant?.logo} className="h-6 w-6" />
                </TooltipTrigger>
                <TooltipContent>Current logo</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Color Scheme</label>
          <div className="flex gap-2 items-center">
            <Input
              className="w-12"
              type="color"
              value={currentTenant?.primaryColor}
              disabled
            />
          </div>
        </div>

        <div className="flex gap-2 w-full">
          <Button
            className="flex-1 mt-8"
            variant="outline"
            onClick={() => navigate(`/tenant/${currentTenant?.id}`)}
          >
            Cancel
          </Button>
          <Button className="flex-1 mt-8" disabled type="submit">
            Save changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TenantSettings;
