import { FC } from "react";
import { makeStyles, Chip } from "@material-ui/core";

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
      style={{ marginRight: "5px", background: "#450e13" }}
    />
  );
};

export { CustomChip };
