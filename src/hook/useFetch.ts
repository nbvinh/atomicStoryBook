import { useEffect, useState } from "react";

const useFetch = (requestUrl: string) => {
  // set your fetch data and error types instead of any
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${requestUrl}`);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [requestUrl]);

  return { data, error, isLoading };
};
export default useFetch;
