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
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

import { useStyles } from "./styles";
import { DataTableComponentProps, ColumnProps } from "./interfaces";
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
  onRowClick,
}: DataTableComponentProps) => {
  const classes = useStyles();

  const renderColumnDefault = ({
    propertie,
    name,
    align,
  }: ColumnProps): JSX.Element => (
    <TableCell
      className={clsx(classes.tableHead, classes.divHead)}
      key={propertie}
      align={align || "center"}>
      {name}
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

  const renderSortableColumn = ({
    propertie,
    name,
    align,
  }: ColumnProps): JSX.Element => (
    <TableCell
      className={classes.tableHead}
      key={propertie}
      align={align || "center"}>
      <TableSortLabel
        className={classes.divHead}
        active={!!orderPropertie && orderPropertie === propertie}
        direction={activeDiretction(propertie)}
        onClick={() => {
          if (alterSort) alterSort(propertie);
        }}>
        {name}
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
            <Typography variant="h5" color="primary" className={classes.title}>
              {title}
            </Typography>
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
                    if (column.sortable) return renderSortableColumn(column);
                    return renderColumnDefault(column);
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow
                  className={clsx(classes.tableRow, {
                    [classes.tableRowCursor]: onRowClick,
                  })}
                  hover
                  onClick={() => {
                    if (onRowClick) {
                      onRowClick(row);
                    }
                  }}
                  tabIndex={-1}
                  key={row.id}>
                  {columns
                    .filter(
                      column => !column.visible && column.visible !== false
                    )
                    .map(column => {
                      if (column.customRenderCell) {
                        return column.customRenderCell(row);
                      }
                      return (
                        <TableCell
                          key={`${
                            column.propertie
                          }-${new Date().getTime()}-${Math.random()}`}
                          align={column.align ? column.align : "center"}
                          style={{ cursor: "pointer" }}>
                          {column.customRenderCellContent
                            ? column.customRenderCellContent(row)
                            : row[column.propertie]}
                        </TableCell>
                      );
                    })}
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
