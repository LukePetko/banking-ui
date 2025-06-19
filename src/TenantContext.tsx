import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Label, Tenant } from "@/types";
import { getTenant } from "./mock";

type TenantContextType = {
  currentTenant: Tenant | null;
  setCurrentTenant: Dispatch<SetStateAction<Tenant | null>>;
  currentLabel: Label | null;
  setCurrentLabel: Dispatch<SetStateAction<Label | null>>;

  isLoggedIn: boolean;
  login: (tenantName: string) => void;
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
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);
  const [currentLabel, setCurrentLabel] = useState<Label | null>(null);

  const login = (tenantName: string) => {
    const tenant = getTenant(tenantName);
    setCurrentTenant(tenant);

    return !!tenant;
  };

  const logout = () => {
    setCurrentTenant(null);
    setCurrentLabel(null);
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
        isLoggedIn: !!currentTenant,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default TenantProvider;
