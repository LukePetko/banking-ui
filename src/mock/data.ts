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

const data: Record<string, Tenant> = {
  bigbank: {
    id: "dcc4ff9b-de85-4135-91f3-71ebe66092c6",
    name: "BigBank",
    logo: "",
    primaryColor: "#000000",
    secondaryColor: "#000000",
    country: "UK",
    labels: {
      bigbankaccounts: {
        id: "59fc4422-4c8a-4b3e-b954-17b3aa35c71d",
        name: "BigBank Accounts",
        logo: null,
        primaryColor: null,
        secondaryColor: null,
        country: null,
      },
      bigbankloans: {
        id: "e2deafd6-a8e0-4881-9e20-1eac1639bd66",
        name: "BigBank Loans",
        logo: "",
        primaryColor: "",
        secondaryColor: "",
        country: null,
      },
      bigbankpremium: {
        id: "c700340b-bd7c-453c-a6c7-b44d6122adf2",
        name: "BigBank Premium",
        logo: "",
        primaryColor: "",
        secondaryColor: "",
        country: null,
      },
      bigbanksavings: {
        id: "ad54706b-ff43-4ec0-84da-66f6513d2891",
        name: "BigBank Savings",
        logo: "",
        primaryColor: "",
        secondaryColor: "",
        country: null,
      },
    },
  },
};

const getTenant = (tenantName: string) => {
  return data[tenantName];
};

const getLabel = (tenantName: string, labelName: string) => {
  const tenant = getTenant(tenantName);
  if (tenant) {
    const label = tenant.labels[labelName];
    if (label) {
      return label;
    }
  }
  throw new Error(`Label ${labelName} not found for tenant ${tenantName}`);
};

export { getTenant, getLabel, type Tenant, type Label };


