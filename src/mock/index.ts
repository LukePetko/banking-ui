import { Tenant } from "@/types";

const data: Record<string, Tenant> = {
  "dcc4ff9b-de85-4135-91f3-71ebe66092c6": {
    id: "dcc4ff9b-de85-4135-91f3-71ebe66092c6",
    name: "BigBank",
    logo: "/bank.svg",
    primaryColor: "#000000",
    secondaryColor: "#000000",
    country: "UK",
    revenue: {
      months: [
        4840000, 4905000, 4940000, 4950000, 4950000, 4960000,
        5000000, 5010000, 4970000, 5000000, 4950000, 4975000,
      ],
    },
    labels: {
      "59fc4422-4c8a-4b3e-b954-17b3aa35c71d": {
        id: "59fc4422-4c8a-4b3e-b954-17b3aa35c71d",
        name: "BigBank Accounts",
        logo: null,
        primaryColor: null,
        secondaryColor: null,
        country: null,
        revenue: {
          months: [
            1180000, 1205000, 1198000, 1212000, 1200000, 1195000,
            1220000, 1235000, 1218000, 1225000, 1208000, 1217000,
          ],
        },
      },
      "e2deafd6-a8e0-4881-9e20-1eac1639bd66": {
        id: "e2deafd6-a8e0-4881-9e20-1eac1639bd66",
        name: "BigBank Loans",
        logo: null,
        primaryColor: "",
        secondaryColor: "",
        country: null,
        revenue: {
          months: [
            2450000, 2485000, 2510000, 2508000, 2495000, 2520000,
            2535000, 2502000, 2518000, 2525000, 2498000, 2512000,
          ],
        },
      },
      "c700340b-bd7c-453c-a6c7-b44d6122adf2": {
        id: "c700340b-bd7c-453c-a6c7-b44d6122adf2",
        name: "BigBank Premium",
        logo: "/star.svg",
        primaryColor: "",
        secondaryColor: "",
        country: null,
        revenue: {
          months: [
            720000, 740000, 730000, 725000, 735000, 740000,
            745000, 738000, 742000, 736000, 730000, 728000,
          ],
        },
      },
      "ad54706b-ff43-4ec0-84da-66f6513d2891": {
        id: "ad54706b-ff43-4ec0-84da-66f6513d2891",
        name: "BigBank Savings",
        logo: "/piggy-bank.svg",
        primaryColor: "",
        secondaryColor: "",
        country: null,
        revenue: {
          months: [
            490000, 495000, 502000, 498000, 505000, 500000,
            508000, 503000, 499000, 507000, 495000, 500000,
          ],
        },
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
