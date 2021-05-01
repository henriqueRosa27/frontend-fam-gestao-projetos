import { lazy, LazyExoticComponent, FC } from "react";

interface Routes {
  path: string;
  component: LazyExoticComponent<FC>;
}

const HomePage = lazy(() => import("../views/Home"));
const ListCitiespage = lazy(() => import("../views/ListCities"));

const autenticate: Routes[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cidades",
    component: ListCitiespage,
  },
];

export { autenticate };
