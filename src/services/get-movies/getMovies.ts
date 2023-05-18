import { API_KEY, BASE_URL } from "../../constants/api/consts";
const query = "movie";

export const getMovies = async () => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  const result = await fetch(`${BASE_URL}/${query}`, {
    headers: headers,
  });
  const movies = await result.json();

  console.log("API_KEY", API_KEY);
  console.log("BASE_URL", BASE_URL);
  // console.log("movies", movies);

  return movies;
};

// const fetchData = async () => {
//   const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
//     headers: headers
//   })
//   const quotes = await rawQuotes.json();
//   const quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
//   setQuote(quote.dialog)
//   const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
//   const characters = await rawCharacters.json();
//   const character = characters.docs[0];
//   setCharacter(character.name)
// };

// fetchData();
// }, []);
