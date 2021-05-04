import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as cityCreator } from "@app/store/ducks/city";
import { getCityState } from "@app/store/selectors";

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
    visible: false,
  },
  {
    name: "Nome",
    propertie: "nome",
    sortable: true,
  },
  {
    name: "Ativo",
    propertie: "ativo",
    customRenderCellContent: ({ ativo }: { ativo: boolean }) =>
      ativo ? "Ativo" : "Inativo",
  },
];

const ListCitiesContainer: FC = () => {
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

export { ListCitiesContainer };
