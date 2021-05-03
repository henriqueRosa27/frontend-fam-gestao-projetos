import api from "./api";

const ROUTE = "cidades";

export const getAllCitiesService = async () => {
  return api.get(ROUTE);
};
