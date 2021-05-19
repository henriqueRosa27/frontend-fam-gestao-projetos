import api from "./api";

const ROUTE = "cidades";

interface IGetAllCitiesParams {
  page?: number;
  size?: number;
  nome?: string;
  ativo?: boolean;
}

const getAllCitiesService = async (params?: IGetAllCitiesParams) => {
  return api.get(ROUTE, { params });
};

const getCityById = async (id: string) => {
  return api.get(`${ROUTE}/${id}`);
};

const createCityService = async (data: { nome: string }) => {
  return api.post(ROUTE, data);
};

const updateCityService = async (id: string, data: { nome: string }) => {
  return api.put(`${ROUTE}/${id}`, data);
};

const inactivateCitiesService = async (id: string) => {
  return api.delete(`${ROUTE}/${id}`);
};

const activateCityService = async (id: string) => {
  return api.patch(`${ROUTE}/${id}`);
};

export {
  getAllCitiesService,
  getCityById,
  createCityService,
  updateCityService,
  inactivateCitiesService,
  activateCityService,
};
