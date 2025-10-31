import {
  useQuery as useBaseQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { TanstackError } from "shared";
import api from "../config/axios";
import { BaseQueryParams } from "../types";
import useAuth from "./useAuth";

interface UseQueryProps<TVariables, TData = unknown, TError = unknown>
  extends UseQueryOptions<TData, TanstackError<TError>, TVariables> {
  params?: BaseQueryParams & Partial<TData>;
  queryKey: any[];
}

const useQuery = <TVariables, TData = unknown, TError = unknown>(
  endpoint: string,
  props?: UseQueryProps<TVariables, TData, TError>
) => {
  const { params, ...baseProps } = props ? props : {};
  const { auth, onError } = useAuth();

  return useBaseQuery<TData, TanstackError<TError>, TVariables>({
    queryKey: props?.queryKey ?? [endpoint],
    queryFn: async () => {
      try {
        const response = await api.get<TData>(endpoint, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
          params: params,
        });
        return response.data ?? ({} as TData);
      } catch (error) {
        onError<TError>(error as TanstackError<TError>);
        throw error;
      }
    },
    ...baseProps,
  });
};

export default useQuery;
