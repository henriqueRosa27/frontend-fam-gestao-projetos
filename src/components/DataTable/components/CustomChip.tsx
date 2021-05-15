import { FC } from "react";
import { makeStyles, Chip } from "@material-ui/core";

import { COLORS } from "src/styles/colors";

interface CustomChipProps {
  label: string;
  onRemoveFilter: () => void;
}

const useStyles = makeStyles({
  chip: {
    "& .MuiChip-label": {
      color: "white",
    },
    "& .MuiChip-deleteIcon": {
      color: "white",
      marginLeft: "5px",
    },
  },
});

const CustomChip: FC<CustomChipProps> = ({
  label,
  onRemoveFilter,
}: CustomChipProps) => {
  const classes = useStyles();

  return (
    <Chip
      label={label}
      className={classes.chip}
      onDelete={() => onRemoveFilter()}
      style={{ marginRight: "5px", background: COLORS.main.hex }}
    />
  );
};

export { CustomChip };
