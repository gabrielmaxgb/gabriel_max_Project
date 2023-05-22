import { API_KEY, BASE_URL } from "../../constants/api/consts";

export const getData = async (query: string) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  const response = await fetch(`${BASE_URL}/${query}`, {
    headers: headers,
  });
  const data = await response.json();

  return data;
};
