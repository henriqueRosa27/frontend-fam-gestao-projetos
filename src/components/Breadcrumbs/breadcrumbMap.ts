interface BreadcrumbMap {
  [key: string]: {
    link?: string;
    name: string;
  }[];
}

const breadcrumbMap: BreadcrumbMap = {
  "/": [{ name: "Home" }],
  "/cidades": [{ name: "Cidades" }],
};

export default breadcrumbMap;
