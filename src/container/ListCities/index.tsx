import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControlLabel,
  Switch,
  TableCell,
  IconButton,
} from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";

import { Creators as cityCreator } from "src/store/ducks/city";
import { getCityState } from "src/store/selectors";
import { ColumnProps } from "src/components/interfaces";
import history from "src/routes/history";

import {
  HeadDatableComponent,
  ContainerComponent,
  DrawerFilterComponent,
  DataTableComponent,
} from "../../components";

const ListCitiesContainer: FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(getCityState);

  useEffect(() => {
    dispatch(cityCreator.loadCitiesRequest());
  }, [dispatch]);

  const redirectEdit = (id: string) => {
    history.push(`/cidades/editar/${id}`);
  };

  const columns: ColumnProps[] = [
    {
      name: "id",
      propertie: "id",
      visible: false,
    },
    {
      name: "Nome",
      propertie: "nome",
      sortable: true,
      align: "left",
    },
    {
      name: "Status",
      propertie: "ativo",
      align: "left",
      customRenderCell: ({ ativo, id }: { id: string; ativo: boolean }) => (
        <TableCell align="left">
          <FormControlLabel
            control={
              <Switch
                checked={ativo}
                color="primary"
                onChange={() => {
                  dispatch(
                    cityCreator.changeStatusCityRequest({ id, status: ativo })
                  );
                }}
              />
            }
            label={ativo ? "Ativo" : "Inativo"}
          />
        </TableCell>
      ),
    },
    {
      name: "Editar",
      propertie: "editar",
      align: "center",
      customRenderCell: ({ id }: { id: string }) => (
        <TableCell align="center" style={{ padding: 0 }}>
          <IconButton
            onClick={() => {
              redirectEdit(id);
            }}>
            <EditIcon />
          </IconButton>
        </TableCell>
      ),
    },
  ];

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
        onRowClick={({ id }: { id: string }) => {
          redirectEdit(id);
        }}
      />
    </ContainerComponent>
  );
};

export { ListCitiesContainer };
