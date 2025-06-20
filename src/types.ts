type Tenant = {
  id: string;
  name: string;
  logo: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  country: string | null;
  revenue: {
    months: number[];
  };
  labels: {
    [key: string]: Label;
  };
};

type Label = {
  id: string;
  name: string;
  logo: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  country: string | null;
  revenue: {
    months: number[];
  };
};

export type { Tenant, Label };
