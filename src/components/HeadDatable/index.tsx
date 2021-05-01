import { FC } from "react";
import { Button } from "@material-ui/core";

import { useStyles } from "./styles";

export const HeadDatableComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonRow}>
      <div className={classes.rootAddButton}>
        <Button variant="outlined" color="primary">
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
