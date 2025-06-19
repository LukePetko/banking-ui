type Tenant = {
  id: string;
  name: string;
  logo: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  country: string | null;
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
};

export type { Tenant, Label };
