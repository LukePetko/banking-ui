# Banking UI web app
Lukáš Peťko

## Technologies used in the project
 - React - required by the assignment
 - TypeScript - best way to write JavaScript in my opinion
 - Tailwind CSS - my go-to CSS framework
 - shadcn UI (and all `@radix-ui`, `lucide-react` and `recharts` packages that it comes with) - provides simple UI components that look good out of the box and are installed directly to the codebase as components

## How to run the project
1. Install all the dependencies using your favourite package manager
2. Run `dev` script

## Mock users in the project
To login to the app just type the name of the tenant into the login field. Mocked tenants:
 - BigBank - 4 Labels
 - TrustBank - 3 Labels

> Disclaimer: I generated TrustBank using AI tool as I wanted to have more examples in the mock data.

## Rationale

### State management
For this project I decided to use React context API as the project was quite small and it did not require any 3rd party state management library. If the project was more complex I would go for slightly more complex solution such as Redux or Zustand.

### Styling
For the styling I went with Tailwind CSS. It is widely used, it's easy to work with and I personally use it on all projects I see fit.

### Structure of the objects
In the project I used the following structure for the `Tenant` and `Label` objects:
```ts
type Tenant = {
  id: string;
  name: string;
  logo: string | null;
  primaryColor: string | null;
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
  country: string | null;
  revenue: {
    months: number[];
  };
};
```

Both `Tenant` and `Label` objects contain similar information and I made it so that `Label` 
can inherit some of the attributes of `Tenant`, namely `logo`, `primaryColor` and `country`.
This means that if the `Label` object does not have a logo, the `Tenant` logo will be used 
as a fallback. I also added `revenue` so that I can display some content on the views.

### Persistence
I used LocalStorage to store `id` of the currently logged in tenant. This way I was able to 
keep the user logged in even after page refresh. 

### Routing and views
The project uses React Router for routing. There are following routes:
 - `/` - Base route that only redirects to `/tenants/:tenantId` if there is logged in tenant and 
    if not it redirects to `/login`
 - `/login` - Route that displays the login form
 - `/tenants/:tenantId` 
   - Route that displays the dashboard of the logged in tenant
   - This view contains grid of the labels as well as the chart of the revenue for the tenant
 - `/tenants/:tenantId/labels/:labelId` 
   - Route that displays the dashboard for the label of logged in user
   - This view contains the chart of the revenue for the label
 - `/tenants/:tenantId/settings` 
   - Route that displays the settings of the logged in tenant
   - View contains attributes of the tenant in form (read only for demo purposes only)
 - `/tenants/:tenantId/labels/:labelId/settings` 
   - Route that displays the settings for the label
   - View contains attributes of the label in form (read only for demo purposes only)


## Deployment
The project is deployed on Vercel. The link to the deployed app is [here](https://banking-ui-three.vercel.app/).
