import {
  useMutation as useBaseMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import api from "../config/axios";
import { TanstackError } from "shared";
import useAuth from "./useAuth";

const useMutation = <TVariables, TData = unknown, TError = unknown>(
  endpoint: string,
  props?: UseMutationOptions<TData, TanstackError<TError>, TVariables>
) => {
  const { onError, ...baseProps } = props ? props : {};
  const { auth, onError: onAuthError } = useAuth();
  return useBaseMutation<TData, TanstackError<TError>, TVariables>({
    mutationFn: async (data: TVariables) => {
      const response = await api.post<TData>(endpoint, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return response.data;
    },
    onError: (error, ...rest) => {
      console.error(
        error.response?.data?.message ?? "Oops! Something went wrong."
      );
      if (onError) onError(error, ...rest);
      onAuthError(error);
    },
    ...baseProps,
  });
};

export default useMutation;
