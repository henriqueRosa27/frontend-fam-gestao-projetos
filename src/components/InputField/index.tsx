import { FC } from "react";
import { TextField } from "@material-ui/core";
import { Control, Controller, FieldValues } from "react-hook-form";

import { useStyles } from "./styles";

interface InputFieldComponent {
  id: string;
  label: string;
  required?: boolean;
  name: string;
  control: Control<any>;
  errors?: string;
}

const InputFieldComponent: FC<InputFieldComponent> = ({
  id,
  label,
  required = false,
  name,
  control,
  errors,
}: InputFieldComponent) => {
  const classes = useStyles();
  return (
    <div id={`form-group-${id}}`} className={classes.root}>
      <label htmlFor={id} className={classes.label}>
        {label} {required && <b style={{ color: "#f44336" }}>*</b>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            id={id}
            className={classes.input}
            fullWidth
            error={!!errors}
            variant="outlined"
          />
        )}
        rules={{
          required: { value: true, message: "Campo obrigatório" },
          minLength: { value: 2, message: "Mínimo de 2 caracteres" },
          maxLength: { value: 50, message: "Máximo de 50 caracteres" },
        }}
      />
    </div>
  );
};

InputFieldComponent.defaultProps = {
  required: false,
  errors: undefined,
};

export { InputFieldComponent };
