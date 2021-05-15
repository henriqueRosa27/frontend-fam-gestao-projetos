import { FC } from "react";
import { TextField } from "@material-ui/core";
import { Control, Controller, RegisterOptions } from "react-hook-form";

import { useStyles } from "./styles";

interface InputFieldComponent {
  id: string;
  label: string;
  required?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  error?: string;
  rules?: Omit<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
}

const InputFieldComponent: FC<InputFieldComponent> = ({
  id,
  label,
  required = false,
  name,
  control,
  error,
  rules,
}: InputFieldComponent) => {
  const classes = useStyles({ error: !!error });
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
            error={!!error}
            variant="outlined"
            helperText={error}
          />
        )}
        rules={rules}
      />
    </div>
  );
};

InputFieldComponent.defaultProps = {
  required: false,
  error: undefined,
  rules: undefined,
};

export { InputFieldComponent };
