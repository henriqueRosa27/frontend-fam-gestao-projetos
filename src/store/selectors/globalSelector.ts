import { IApplicationState } from "../index";

const getCityState = (state: IApplicationState) => state.city;

type CityState = ReturnType<typeof getCityState>;

export { getCityState };
export type { CityState };
