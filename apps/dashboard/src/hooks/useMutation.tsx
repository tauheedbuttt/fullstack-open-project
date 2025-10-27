import {
  useMutation as useBaseMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import api from "../config/axios";

const useMutation = <TVariables, TData = unknown>(
  endpoint: string,
  props?: UseMutationOptions<TData, Error, TVariables>
) => {
  return useBaseMutation<TData, Error, TVariables>({
    mutationFn: async (data: TVariables) => {
      const response = await api.post<TData>(endpoint, data);
      return response.data;
    },
    ...props,
  });
};

export default useMutation;
