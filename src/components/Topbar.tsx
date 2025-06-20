import { useTenant } from "@/TenantContext";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import user from "@/assets/user-solid.svg";
import back from "@/assets/arrow-left-solid.svg";
import { useNavigate } from "react-router";

const Topbar = () => {
  const { currentTenant, currentLabel, logout } = useTenant();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-12 px-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        {currentLabel?.id && (
          <Button
            variant="ghost"
            className="p-2 rounded-full"
            onClick={() => navigate(`/tenant/${currentTenant?.id}`)}
          >
            <img src={back} className="h-5 w-5" />
          </Button>
        )}
        {Boolean(currentTenant?.logo || currentLabel?.logo) && (
          <img
            src={currentLabel?.logo ?? currentTenant?.logo}
            className="h-6 w-6"
          />
        )}
        <span className="text-xl font-bold">
          {currentLabel?.name ?? currentTenant?.name}
        </span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="bg-zinc-100 hover:bg-zinc-200 rounded-full p-2 transition-all">
          <img src={user} className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{currentTenant?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => navigate(`/tenant/${currentTenant?.id}/settings`)}
          >
            Tenant Settings
          </DropdownMenuItem>
          {currentLabel?.id && (
            <DropdownMenuItem
              onClick={() =>
                navigate(
                  `/tenant/${currentTenant?.id}/label/${currentLabel?.id}/settings`,
                )
              }
            >
              Label Settings
            </DropdownMenuItem>
          )}
          <DropdownMenuItem className="text-red-500" onClick={logout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Topbar;
