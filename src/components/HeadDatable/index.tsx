import { FC } from "react";
import { Link } from "react-router-dom";

import { ButtonComponent } from "src/components";
import { useStyles } from "./styles";

interface HeadDatableComponentProps {
  to: string;
  onClickFilter: () => void;
}

const HeadDatableComponent: FC<HeadDatableComponentProps> = ({
  to,
  onClickFilter,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonRow}>
      <ButtonComponent
        component={Link}
        to={to}
        variant="outlined"
        color="primary"
        text="Cadastrar"
      />

      <ButtonComponent
        variant="contained"
        color="primary"
        text="Filtrar"
        onClick={onClickFilter}
      />
    </div>
  );
};

export { HeadDatableComponent };
