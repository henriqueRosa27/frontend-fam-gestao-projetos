import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as cityCreator } from "../../store/ducks/city";
import { getCityState } from "../../store/selectors";

import {
  HeadDatableComponent,
  ContainerComponent,
  DrawerFilterComponent,
  DataTableComponent,
} from "../../components";

const columns = [
  {
    name: "id",
    propertie: "id",
  },
  {
    name: "Nome",
    propertie: "name",
    sortable: true,
  },
  {
    name: "Status",
    propertie: "status",
    customRenderCellContent: ({ status }: { status: boolean }) =>
      status ? "Ativo" : "Inativo",
  },
];

export const ListCitiesContainer: FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(getCityState);

  useEffect(() => {
    dispatch(cityCreator.loadCitiesRequest());
  }, [dispatch]);

  return (
    <ContainerComponent>
      <DrawerFilterComponent />
      <HeadDatableComponent />
      <DataTableComponent
        data={data}
        totalRows={5}
        title="Listagem de cidades"
        filters={[{ label: "teste", propertie: "teste" }]}
        columns={columns}
        orderPropertie="string"
        orderDirection="asc"
      />
    </ContainerComponent>
  );
};
