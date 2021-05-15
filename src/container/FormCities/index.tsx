import { FC } from "react";
import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { InputFieldComponent, ButtonComponent } from "src/components";
import { NoteIcon } from "src/assets/icons";
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
          <NoteIcon color="primary" fontSize="large" />
          <h1 className={classes.h1}>Nova cidade</h1>
        </Grid>
        <Grid item xs={12}>
          <InputFieldComponent
            id="nome"
            label="Nome"
            name="nome"
            control={control}
            error={errors?.nome?.message}
            rules={{
              required: { value: true, message: "Campo obrigatório" },
              minLength: { value: 2, message: "Mínimo de 2 caracteres" },
              maxLength: { value: 50, message: "Máximo de 50 caracteres" },
            }}
          />
        </Grid>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonComponent
            color="primary"
            variant="outlined"
            onClick={handleSubmit(submit)}
            text="Voltar"
          />
          <ButtonComponent
            color="primary"
            variant="contained"
            onClick={handleSubmit(submit)}
            text="Salvar"
          />
        </div>
      </Grid>
    </div>
  );
};

export { FormCitiesContainer };
