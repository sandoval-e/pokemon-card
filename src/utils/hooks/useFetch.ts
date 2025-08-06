import { useEffect, useState, useCallback } from "react";
import type { PokemonData } from '../../types';

type RequestOptions = RequestInit;

export function useFetch(
  url: string,
  options?: RequestOptions,
  autoFetch: boolean = true
) {
  const [data, setData] = useState<PokemonData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try 
    {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const result: PokemonData = (await response.json()) as PokemonData;
      setData(result);
    } 
    catch (err: any) 
    {
      setError(err.message || "Unknown error");
    } 
    finally 
    {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]); // dependencia JSON.stringify para evitar referencias distintas

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return { data, error, loading, refetch: fetchData };
}