export interface Action<T> {
  icon?: React.ReactNode;
  text?: string;
  onClick: (data: T) => void;
}
