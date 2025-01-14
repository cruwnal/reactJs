import dashboardRoutes from "routes";

export const useRouteName = () => {
  let name = "";

  dashboardRoutes.forEach((route) => {
    // Check if the current URL includes the route's layout and path
    if (window.location.href.includes(route.layout + route.path)) {
      // Use rtlName if rtlActive is true, otherwise use name
      name = route.rtlActive ? route.rtlName : route.name;
    }
  });

  return name;
};
