import { FC } from "react";
import { Select, MenuItem } from "@material-ui/core";

import { useStyles } from "./styles";

interface InputListProps {
  options: { value?: number | string; label: string }[];
  placeholder?: string;
  id: string;
  error?: string;
  required?: boolean;
  label: string;
  onChange: (value?: number | string) => void;
  value?: number | string | boolean;
}

const InputListComponent: FC<InputListProps> = ({
  options,
  placeholder = undefined,
  error,
  id,
  required = false,
  label,
  onChange,
  value,
}) => {
  const classes = useStyles({ error: !!error });
  return (
    <div className={classes.root}>
      <label htmlFor={id} className={classes.label}>
        {label} {required && <b style={{ color: "#f44336" }}>*</b>}
      </label>
      <Select
        id={id}
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={event => {
          onChange(event.target.value as number | string | undefined);
        }}
        className={classes.input}>
        <MenuItem value={undefined} disabled>
          {placeholder}
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export { InputListComponent };
