import { FC } from "react";
import { Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { InputFieldComponent } from "src/components";
import { ReactComponent as EditIcon } from "src/assets/icons/Edit.svg";
import { Creators as cityCreators } from "src/store/ducks/city";
import { useStyles } from "./styles";

const defaultValues = {
  nome: "",
};

const FormCitiesContainer: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const submit = ({ nome }: { nome: string }) => {
    dispatch(cityCreators.createCityRequest(nome));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="flex-start">
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "spacing-between",
            paddingLeft: "10px",
          }}>
          <EditIcon />
          <h1 className={classes.h1}>Nova cidade</h1>
        </Grid>
        <Grid item xs={12}>
          <InputFieldComponent
            id="nome"
            label="Nome"
            name="nome"
            control={control}
            errors={errors?.nome?.message}
          />
        </Grid>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className={classes.buttonSave}>
            <Button variant="outlined" onClick={handleSubmit(submit)}>
              Salvar
            </Button>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export { FormCitiesContainer };
