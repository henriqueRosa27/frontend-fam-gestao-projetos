import { FC } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
} from "@material-ui/core";
import clsx from "clsx";

import { useStyles } from "./styles";
import { DataTableComponentProps } from "./interfaces";
import { CustomChip } from "./components";

const DataTableComponent: FC<DataTableComponentProps> = ({
  totalRows,
  data,
  title,
  filters = undefined,
  onRemoveFilter,
  columns,
  orderPropertie,
  orderDirection,
  alterSort,
}: DataTableComponentProps) => {
  const classes = useStyles();

  const renderColumnDefault = (key: string, label?: string): JSX.Element => (
    <TableCell
      className={clsx(classes.tableHead, classes.divHead)}
      key={key}
      align="left">
      {label}
    </TableCell>
  );

  const activeSort = (propertie: string): boolean => {
    return !!orderPropertie && orderPropertie === propertie;
  };

  const activeDiretction = (propertie: string): "desc" | "asc" | undefined => {
    if (activeSort(propertie) && orderDirection) {
      return orderDirection;
    }
    return undefined;
  };

  const renderSortableColumn = (
    propertie: string,
    label?: string
  ): JSX.Element => (
    <TableCell className={classes.tableHead} key={propertie} align="left">
      <TableSortLabel
        className={classes.divHead}
        active={!!orderPropertie && orderPropertie === propertie}
        direction={activeDiretction(propertie)}
        onClick={() => {
          if (alterSort) alterSort(propertie);
        }}>
        {label}
      </TableSortLabel>
    </TableCell>
  );

  return (
    <div>
      {totalRows > 0 && (
        <div className={classes.show}>
          <span>
            Exibindo {data.length} de {totalRows} resultados
          </span>
        </div>
      )}
      <Paper className={classes.table}>
        <TableContainer>
          <div className={classes.tableToolBar}>
            <div className={classes.title}>{title}</div>
            <div style={{ paddingTop: "20px" }}>
              {filters &&
                filters.map(filter => (
                  <CustomChip
                    key={filter.propertie}
                    label={filter.label}
                    onRemoveFilter={() => {
                      if (onRemoveFilter) onRemoveFilter(filter.propertie);
                    }}
                  />
                ))}
            </div>
          </div>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns
                  .filter(column => !column.visible && column.visible !== false)
                  .map(column => {
                    if (column.sortable)
                      return renderSortableColumn(
                        column.propertie,
                        column.name
                      );
                    return renderColumnDefault(column.propertie, column.name);
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow
                  className={classes.tableRow}
                  hover
                  tabIndex={-1}
                  key={row.id}>
                  {columns
                    .filter(
                      column => !column.visible && column.visible !== false
                    )
                    .map(column => (
                      <TableCell
                        key={column.propertie}
                        align="left"
                        style={{ cursor: "pointer" }}>
                        {column.customRenderCellContent
                          ? column.customRenderCellContent(row)
                          : row[column.propertie]}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export { DataTableComponent };
