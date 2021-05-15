interface BreadcrumbMap {
  [key: string]: {
    link?: string;
    name: string;
  }[];
}

const breadcrumbMap: BreadcrumbMap = {
  "/": [{ name: "Home" }],
  "/cidades": [{ name: "Cidades" }],
  "/cidades/criar": [
    { name: "Cidades", link: "/cidades" },
    { name: "Cadastrar Cidade" },
  ],
  "/cidades/editar": [
    { name: "Cidades", link: "/cidades" },
    { name: "Cadastrar Cidade" },
  ],
};

export default breadcrumbMap;
