import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import {
  InputFieldComponent,
  HeadDatableComponent,
  DrawerFilterComponent,
  InputListComponent,
} from "src/components";
import { actions as cityActions } from "src/store/ducks/city";
import { getCityState } from "src/store/selectors";

const DrawerFilter: FC = () => {
  const dispatch = useDispatch();
  const [filterOpen, setFilterOpen] = useState(false);
  const { filters } = useSelector(getCityState);

  const handleChange = (
    propertie: "nome" | "ativo",
    value: string | number
  ) => {
    dispatch(cityActions.setFilterData({ propertie, value }));
  };

  const handleFilter = () => {
    dispatch(cityActions.loadCitiesRequest({}));
    setFilterOpen(false);
  };

  return (
    <>
      <HeadDatableComponent
        to="/cidades/criar"
        onClickFilter={() => {
          setFilterOpen(true);
        }}
      />
      <DrawerFilterComponent
        open={filterOpen}
        onFilter={handleFilter}
        onOpen={() => {
          setFilterOpen(true);
        }}
        onClose={() => {
          setFilterOpen(false);
        }}>
        <Grid>
          <InputFieldComponent
            id="nome"
            label="Nome"
            name="nome"
            value={filters.nome}
            placeholder="Informe um nome"
            onChange={value => {
              handleChange("nome", value);
            }}
          />
          <InputListComponent
            id="status"
            label="Status"
            placeholder="Selecione o Status"
            value={filters?.ativo}
            onChange={value => {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              handleChange("ativo", value!);
            }}
            options={[
              { label: "Ambos", value: -1 },
              { label: "Ativo", value: 1 },
              { label: "Inativo", value: 0 },
            ]}
          />
        </Grid>
      </DrawerFilterComponent>
    </>
  );
};

export { DrawerFilter };
