import {
  useMutation as useBaseMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import api from "../config/axios";
import { TanstackError } from "shared";

const useMutation = <TVariables, TData = unknown, TError = unknown>(
  endpoint: string,
  props?: UseMutationOptions<TData, TanstackError<TError>, TVariables>
) => {
  const { onError, ...baseProps } = props ? props : {};
  return useBaseMutation<TData, TanstackError<TError>, TVariables>({
    mutationFn: async (data: TVariables) => {
      const response = await api.post<TData>(endpoint, data);
      return response.data;
    },
    onError: (error, ...rest) => {
      console.error(
        error.response?.data?.message ?? "Oops! Something went wrong."
      );
      if (onError) onError(error, ...rest);
    },
    ...baseProps,
  });
};

export default useMutation;
