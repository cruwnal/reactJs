import { reports } from "routes";

export const useRouteName = () => {
  let name = "";
  reports.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = reports.rtlActive ? route.rtlName : route.name;
    }
  });
  return name;
};
