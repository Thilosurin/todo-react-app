export interface TasksType {
  id: string;
  content: string;
}

export interface ColumnType {
  id: string;
  title: string;
  taskIds: string[];
}

export interface InitialDataType {
  tasks: { [key: string]: TasksType };
  columns: { [key: string]: ColumnType };
  columnOrder: string[];
}
