import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Label, Tenant } from "@/types";
import { getTenant, getTenantByName } from "./mock";
import { useNavigate } from "react-router";

type TenantContextType = {
  currentTenant?: Tenant;
  setCurrentTenant: Dispatch<SetStateAction<Tenant | undefined>>;
  currentLabel?: Label;
  setCurrentLabel: Dispatch<SetStateAction<Label | undefined>>;

  isLoggedIn: boolean;
  login: (tenantName: string) => boolean;
  logout: () => void;
};

export const TenantContext = createContext<TenantContextType | null>(null);

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (context === null) {
    throw new Error("useTenant must be used within a TenantProvider");
  }

  return context;
};

const TenantProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTenant, setCurrentTenant] = useState<Tenant | undefined>();
  const [currentLabel, setCurrentLabel] = useState<Label | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const tenantId = localStorage.getItem("tenant");
    if (tenantId) {
      const tenant = getTenant(tenantId);
      if (tenant) setCurrentTenant(tenant);
    }
  }, []);

    useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const login = (tenantName: string) => {
    const tenant = getTenantByName(tenantName);
    setCurrentTenant(tenant);

    if (tenant) localStorage.setItem("tenant", tenant.id);

    setIsLoggedIn(!!tenant);

    return tenant?.id;
  };

  const logout = () => {
    setCurrentTenant(undefined);
    setCurrentLabel(undefined);
    localStorage.removeItem("tenant");
        
    setIsLoggedIn(false);
  };

  return (
    <TenantContext.Provider
      value={{
        currentTenant,
        setCurrentTenant,
        currentLabel,
        setCurrentLabel,
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default TenantProvider;
