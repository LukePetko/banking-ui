import { useTenant } from "@/TenantContext";
import React from "react";
import { Input } from "./ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

const LabelSettings = () => {
  const { currentLabel, currentTenant } = useTenant();
  const navigate = useNavigate();
  return (
    <form className="w-full max-w-lg mx-auto flex flex-col gap-4 pt-24">
      <h1 className="text-4xl font-bold mb-6">{currentLabel?.name} Settings</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Name</label>
          <Input value={currentLabel?.name} disabled />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Country</label>
          <Input value={currentLabel?.country ?? "N/A"} disabled />
          {!currentLabel?.country && currentTenant?.country && (
            <span className="text-zinc-500 text-sm">
              Value inherent from tenant: <span className="font-semibold">
                {currentTenant?.country}
              </span>
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium">Logo</label>
          <div className="flex gap-2 items-center">
            <Input type="file" accept="image/*" disabled />
            {currentLabel?.logo && (
              <Tooltip>
                <TooltipTrigger>
                  <img src={currentLabel?.logo} className="h-6 w-6" />
                </TooltipTrigger>
                <TooltipContent>Current logo</TooltipContent>
              </Tooltip>
            )}
            {!currentLabel?.logo && currentTenant?.logo && (
              <Tooltip>
                <TooltipTrigger>
                  <img src={currentTenant?.logo} className="h-6 w-6" />
                </TooltipTrigger>
                <TooltipContent>Inherent from tenant</TooltipContent>
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
              value={currentLabel?.primaryColor}
              disabled
            />
          </div>
            {!currentLabel?.primaryColor && currentTenant?.primaryColor && (
              <span className="text-zinc-500 text-sm">
                Value inherent from tenant: <span className="font-semibold" style={{ color: currentTenant?.primaryColor }}>
                  {currentTenant?.primaryColor}
                </span>
              </span>
            )}
        </div>

        <div className="flex gap-2 w-full">
          <Button
            className="flex-1 mt-8"
            variant="outline"
            onClick={() => navigate(`/tenant/${currentLabel?.id}`)}
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

export default LabelSettings;
