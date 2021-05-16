import { FC } from "react";
import { TextField } from "@material-ui/core";

import { useStyles } from "./styles";

interface InputFieldComponent {
  id: string;
  label: string;
  required?: boolean;
  name: string;
  error?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputFieldComponent: FC<InputFieldComponent> = ({
  id,
  label,
  required = false,
  name,
  error,
  value,
  onChange,
}: InputFieldComponent) => {
  const classes = useStyles({ error: !!error });
  return (
    <div id={`form-group-${id}}`} className={classes.root}>
      <label htmlFor={id} className={classes.label}>
        {label} {required && <b style={{ color: "#f44336" }}>*</b>}
      </label>
      <TextField
        name={name}
        id={id}
        className={classes.input}
        fullWidth
        error={!!error}
        variant="outlined"
        helperText={error}
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

InputFieldComponent.defaultProps = {
  required: false,
  error: undefined,
};

export { InputFieldComponent };
