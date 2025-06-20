import { Tenant } from "@/types";

const data: Record<string, Tenant> = {
  "dcc4ff9b-de85-4135-91f3-71ebe66092c6": {
    id: "dcc4ff9b-de85-4135-91f3-71ebe66092c6",
    name: "BigBank",
    logo: "/bank.svg",
    primaryColor: "#1E3A8A",
    country: "UK",
    revenue: {
      months: [
        4840000, 4905000, 4940000, 4950000, 4950000, 4960000, 5000000, 5010000,
        4970000, 5000000, 4950000, 4975000,
      ],
    },
    labels: {
      "59fc4422-4c8a-4b3e-b954-17b3aa35c71d": {
        id: "59fc4422-4c8a-4b3e-b954-17b3aa35c71d",
        name: "BigBank Accounts",
        logo: null,
        primaryColor: null,
        country: null,
        revenue: {
          months: [
            1180000, 1205000, 1198000, 1212000, 1200000, 1195000, 1220000,
            1235000, 1218000, 1225000, 1208000, 1217000,
          ],
        },
      },
      "e2deafd6-a8e0-4881-9e20-1eac1639bd66": {
        id: "e2deafd6-a8e0-4881-9e20-1eac1639bd66",
        name: "BigBank Loans",
        logo: null,
        primaryColor: "#0D9488",
        country: null,
        revenue: {
          months: [
            2450000, 2485000, 2510000, 2508000, 2495000, 2520000, 2535000,
            2502000, 2518000, 2525000, 2498000, 2512000,
          ],
        },
      },
      "c700340b-bd7c-453c-a6c7-b44d6122adf2": {
        id: "c700340b-bd7c-453c-a6c7-b44d6122adf2",
        name: "BigBank Premium",
        logo: "/star.svg",
        primaryColor: "#D97706",
        country: null,
        revenue: {
          months: [
            720000, 740000, 730000, 725000, 735000, 740000, 745000, 738000,
            742000, 736000, 730000, 728000,
          ],
        },
      },
      "ad54706b-ff43-4ec0-84da-66f6513d2891": {
        id: "ad54706b-ff43-4ec0-84da-66f6513d2891",
        name: "BigBank Savings",
        logo: "/piggy-bank.svg",
        primaryColor: "#16A34A",
        country: null,
        revenue: {
          months: [
            490000, 495000, 502000, 498000, 505000, 500000, 508000, 503000,
            499000, 507000, 495000, 500000,
          ],
        },
      },
    },
  },
  "b5c1a2f3-1234-5678-9101-abcdefabcdef": {
    id: "b5c1a2f3-1234-5678-9101-abcdefabcdef",
    name: "TrustBank",
    logo: "/bank.svg",
    primaryColor: "#0F766E",
    country: "DE",
    revenue: {
      months: [
        3900000, 3950000, 4000000, 4020000, 4030000, 4050000, 4075000, 4100000,
        4090000, 4120000, 4150000, 4180000,
      ],
    },
    labels: {
      "a1b2c3d4-e5f6-7890-1234-56789abcdef0": {
        id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
        name: "TrustBank Personal",
        logo: "/star.svg",
        primaryColor: "#0EA5E9",
        country: "DE",
        revenue: {
          months: [
            1200000, 1220000, 1250000, 1260000, 1275000, 1285000, 1290000,
            1300000, 1310000, 1320000, 1330000, 1345000,
          ],
        },
      },
      "b2c3d4e5-f678-9012-3456-789abcdef123": {
        id: "b2c3d4e5-f678-9012-3456-789abcdef123",
        name: "TrustBank Business",
        logo: "/money-bill-trend-up.svg",
        primaryColor: "#9333EA",
        country: "DE",
        revenue: {
          months: [
            1800000, 1825000, 1850000, 1865000, 1880000, 1895000, 1910000,
            1930000, 1925000, 1950000, 1965000, 1980000,
          ],
        },
      },
      "c3d4e5f6-7890-1234-5678-9abcdef12345": {
        id: "c3d4e5f6-7890-1234-5678-9abcdef12345",
        name: "TrustBank Savings",
        logo: "/piggy-bank.svg",
        primaryColor: "#15803D",
        country: "DE",
        revenue: {
          months: [
            900000, 905000, 910000, 915000, 920000, 925000, 930000, 935000,
            940000, 945000, 950000, 955000,
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
  return (
    Object.values(data).find((tenant) => tenant.name === tenantName) !==
    undefined
  );
};

export {
  getTenantByName,
  getTenant,
  getLabelByName,
  getLabel,
  doesTenantExist,
  doesTenantExistByName,
};
