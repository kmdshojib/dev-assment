import axios from "axios";
import { useQuery } from "react-query";

const baseURL = "https://disease.sh/v3/covid-19";

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

