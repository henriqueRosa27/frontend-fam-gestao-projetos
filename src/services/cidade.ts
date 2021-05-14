import api from "./api";

const ROUTE = "cidades";

export const getAllCitiesService = async () => {
  return api.get(ROUTE);
};

export const createCityService = async (data: { nome: string }) => {
  return api.post(ROUTE, data);
};
