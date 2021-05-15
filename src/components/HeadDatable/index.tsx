import { FC } from "react";
import { Link } from "react-router-dom";

import { ButtonComponent } from "src/components";
import { useStyles } from "./styles";

const HeadDatableComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonRow}>
      <ButtonComponent
        component={Link}
        to="/cidades/criar"
        variant="outlined"
        color="primary"
        text="Cadastrar"
      />

      <ButtonComponent variant="contained" color="primary" text="Filtrar" />
    </div>
  );
};

export { HeadDatableComponent };
