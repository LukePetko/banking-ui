import { Tenant } from "@/types";

const data: Record<string, Tenant> = {
  "dcc4ff9b-de85-4135-91f3-71ebe66092c6": {
    id: "dcc4ff9b-de85-4135-91f3-71ebe66092c6",
    name: "BigBank",
    logo: "",
    primaryColor: "#000000",
    secondaryColor: "#000000",
    country: "UK",
    labels: {
      "59fc4422-4c8a-4b3e-b954-17b3aa35c71d": {
        id: "59fc4422-4c8a-4b3e-b954-17b3aa35c71d",
        name: "BigBank Accounts",
        logo: null,
        primaryColor: null,
        secondaryColor: null,
        country: null,
      },
      "e2deafd6-a8e0-4881-9e20-1eac1639bd66": {
        id: "e2deafd6-a8e0-4881-9e20-1eac1639bd66",
        name: "BigBank Loans",
        logo: "",
        primaryColor: "",
        secondaryColor: "",
        country: null,
      },
      "c700340b-bd7c-453c-a6c7-b44d6122adf2": {
        id: "c700340b-bd7c-453c-a6c7-b44d6122adf2",
        name: "BigBank Premium",
        logo: "",
        primaryColor: "",
        secondaryColor: "",
        country: null,
      },
      "ad54706b-ff43-4ec0-84da-66f6513d2891": {
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

const getTenantByName = (tenantName: string) => {
  return Object.values(data).find((tenant) => tenant.name === tenantName);
};

const getTenant = (id: string) => {
  return data[id];
};

const getLabelByName = (tenantId: string, labelName: string) => {
  const tenant = getTenant(tenantId);
  if (tenant) {
    return Object.values(tenant.labels).find(
      (label) => label.name === labelName,
    );
  }
};

const getLabel = (tenantId: string, labelId: string) => {
  const tenant = getTenant(tenantId);
  if (tenant) {
    return tenant.labels[labelId];
  }
};

const doesTenantExist = (id: string) => {
  return data[id] !== undefined;
};

const doesTenantExistByName = (tenantName: string) => {
  return Object.values(data).find((tenant) => tenant.name === tenantName) !== undefined;
};

export {
  getTenantByName,
  getTenant,
  getLabelByName,
  getLabel,
  doesTenantExist,
  doesTenantExistByName,
};
