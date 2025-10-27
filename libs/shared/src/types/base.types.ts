export interface IBaseResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
}

export interface IBaseErrorResponse<T> extends IBaseResponse<T> {
  error?: string;
}

export interface TanstackError<T> {
  response?: { data?: IBaseErrorResponse<T> };
}
