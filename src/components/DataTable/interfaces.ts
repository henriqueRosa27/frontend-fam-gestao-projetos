interface DataTableComponentProps {
  totalRows: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  title: string;
  filters?: FilterProps[];
  onRemoveFilter?: (filter: string) => void;
  columns: ColumnProps[];
  orderPropertie?: string;
  orderDirection?: "desc" | "asc" | undefined;
  alterSort?: (propertie: string) => void;
  page: number;
  onChangePage?: (page: number) => void;
  onChangeRowsPerPage?: (rowsPerPage: string) => void;
  rowsPerPage?: number;
}

interface FilterProps {
  propertie: string;
  label: string;
}

interface ColumnProps {
  name?: string;
  propertie: string;
  sortable?: boolean;
  visible?: boolean;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customRenderCellContent?: (data: any) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customRenderCell?: (data: any) => JSX.Element;
}

export type { DataTableComponentProps, FilterProps, ColumnProps };
