import { FC, useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { InputFieldComponent, ButtonComponent } from "src/components";
import { NoteIcon } from "src/assets/icons";
import { Creators as cityCreators } from "src/store/ducks/city";
import history from "src/routes/history";
import { getCityState } from "src/store/selectors";
import { useStyles } from "./styles";

const defaultValues = {
  nome: "",
};

const FormCitiesContainer: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string | undefined }>();
  const { model } = useSelector(getCityState);
  const [formState, setFormState] = useState<{ nome: string }>({ nome: "" });
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    dispatch(cityCreators.clearModelCity());
    if (id) {
      dispatch(cityCreators.loadCityByIdRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    const nomeModel = model.nome || "";
    setValue("nome", nomeModel, { shouldDirty: true });
    setFormState({ nome: nomeModel });
  }, [model, setValue]);

  const submit = ({ nome }: { nome: string }) => {
    if (id) {
      dispatch(cityCreators.updateCityRequest(id, nome));
    } else {
      dispatch(cityCreators.createCityRequest(nome));
    }
  };

  const goBack = () => {
    history.goBack();
  };

  // poderá ser usado em outros casos
  // const handleChange = (name: string) => (value: string) => {
  //   setFormState({...state, formState[name]: value})
  // };

  const handleChange = () => (value: string) => {
    setValue("nome", value, { shouldValidate: true });
    setFormState({ nome: value });
  };

  register("nome", {
    required: { value: true, message: "Campo obrigatório" },
    minLength: { value: 2, message: "Mínimo de 2 caracteres" },
    maxLength: { value: 50, message: "Máximo de 50 caracteres" },
  });

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
          <Typography variant="h5" color="primary" className={classes.title}>
            Nova cidade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputFieldComponent
            id="nome"
            label="Nome"
            name="nome"
            value={formState.nome}
            error={errors?.nome?.message}
            onChange={handleChange()}
          />
        </Grid>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonComponent
            color="primary"
            variant="outlined"
            onClick={goBack}
            text="Voltar"
          />
          <ButtonComponent
            color="primary"
            variant="contained"
            disabled={!isValid}
            onClick={handleSubmit(submit)}
            text="Salvar"
          />
        </div>
      </Grid>
    </div>
  );
};

export { FormCitiesContainer };
