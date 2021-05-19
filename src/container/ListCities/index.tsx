import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControlLabel,
  Switch,
  TableCell,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";

import { DataTableComponent, ContainerComponent } from "src/components";
import { Creators as cityCreator } from "src/store/ducks/city";
import { getCityState } from "src/store/selectors";
import { ColumnProps } from "src/components/interfaces";
import history from "src/routes/history";
import { DrawerFilter } from "./components";

const ListCitiesContainer: FC = () => {
  const dispatch = useDispatch();
  const { dataList } = useSelector(getCityState);

  useEffect(() => {
    dispatch(cityCreator.loadCitiesRequest());
  }, [dispatch]);

  const changePage = (page: number) => {
    dispatch(
      cityCreator.loadCitiesRequest({
        pagina: page + 1,
        tamanho: dataList.size,
      })
    );
  };

  const changeRowsPerPage = (tamanho: string) => {
    dispatch(
      cityCreator.loadCitiesRequest({
        pagina: 1,
        tamanho: +tamanho,
      })
    );
  };

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
            label={
              <Typography variant="body2">
                {ativo ? "Ativo" : "Inativo"}
              </Typography>
            }
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
      <DrawerFilter />
      <DataTableComponent
        data={dataList?.list || []}
        totalRows={dataList.totalItems}
        page={dataList.currentPage - 1}
        rowsPerPage={dataList.size}
        title="Listagem de cidades"
        filters={[]}
        columns={columns}
        orderPropertie="nome"
        orderDirection="asc"
        onChangePage={changePage}
        onChangeRowsPerPage={changeRowsPerPage}
      />
    </ContainerComponent>
  );
};

export { ListCitiesContainer };
