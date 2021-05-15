import { lazy, LazyExoticComponent, FC } from "react";

interface Routes {
  key?: string;
  path: string;
  component: LazyExoticComponent<FC>;
}

const HomePage = lazy(() => import("../views/Home"));
const ListCitiespage = lazy(() => import("../views/ListCities"));
const FormCitiespage = lazy(() => import("../views/FormCities"));

const autenticate: Routes[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/cidades",
    component: ListCitiespage,
  },
  {
    path: "/cidades/criar",
    component: FormCitiespage,
  },
  {
    key: "t",
    path: "/cidades/editar/:id",
    component: FormCitiespage,
  },
];

export { autenticate };
