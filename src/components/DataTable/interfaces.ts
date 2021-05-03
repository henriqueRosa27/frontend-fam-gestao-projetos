interface DataTableComponentProps {
  totalRows: number;
  data: any[];
  title: string;
  filters?: FilterProps[];
  onRemoveFilter?: (filter: string) => void;
  columns: ColumnsProps[];
  orderPropertie?: string;
  orderDirection?: "desc" | "asc" | undefined;
  alterSort?: (propertie: string) => void;
}

interface FilterProps {
  propertie: string;
  label: string;
}

interface ColumnsProps {
  name?: string;
  propertie: string;
  sortable?: boolean;
  visible?: boolean;
  customRenderCellContent?: (data: any) => string;
  customRenderCell?: (data: unknown) => JSX.Element;
}

export type { DataTableComponentProps, FilterProps, ColumnsProps };
