import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url, customParams = {}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    method: "get",
    baseURL: "https://api.themoviedb.org/3/",
    url: url,
    params: {
      api_key: "bb604cf2738eca4dfdca2270a31cf563",
      ...customParams,
    },
  };
  const { page, query } = customParams;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(options);

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query, url]);

  return [data, loading, error];
};
