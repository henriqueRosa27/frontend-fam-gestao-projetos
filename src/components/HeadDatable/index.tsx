import { FC } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const HeadDatableComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonRow}>
      <div className={classes.rootAddButton}>
        <Button
          component={Link}
          to="/cidades/criar"
          variant="outlined"
          color="primary">
          Cadastrar
        </Button>
      </div>

      <div className={classes.rootFilterButton}>
        <Button variant="contained" color="primary">
          Filtrar
        </Button>
      </div>
    </div>
  );
};

export { HeadDatableComponent };
