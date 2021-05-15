import api from "./api";

const ROUTE = "cidades";

export const getAllCitiesService = async () => {
  return api.get(ROUTE);
};

export const createCityService = async (data: { nome: string }) => {
  return api.post(`${ROUTE}`, data);
};

export const inactivateCitiesService = async (id: string) => {
  return api.delete(`${ROUTE}/${id}`);
};

export const activateCityService = async (id: string) => {
  return api.patch(`${ROUTE}/${id}`);
};
