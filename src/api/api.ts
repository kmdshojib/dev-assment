import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const baseURL = "https://disease.sh/v3";

const api = axios.create({
  baseURL,
});

export const useApiQuery = <TData, TError>(
  endpoint: string,
  queryKey: string
) => {
  return useQuery<TData, TError>(queryKey, async () => {
    const response = await api.get(endpoint);
    return response.data;
  });
};

export const useApiMutation = <TData, TError>(
  endpoint: string,
  queryKey: string
) => {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, any, any>(async (data) => {
    const response = await api.post(endpoint, data);

    queryClient.invalidateQueries(queryKey);

    return response.data;
  });
};
