export interface DataTableComponentProps {
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

export interface FilterProps {
  propertie: string;
  label: string;
}

export interface ColumnsProps {
  name?: string;
  propertie: string;
  sortable?: boolean;
  visible?: boolean;
  customRenderCellContent?: (data: any) => string;
  customRenderCell?: (data: unknown) => JSX.Element;
}
