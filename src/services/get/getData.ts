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

  // console.log("API_KEY", API_KEY);
  // console.log("BASE_URL", BASE_URL);
  // console.log("getData data", data);

  return data;
};
