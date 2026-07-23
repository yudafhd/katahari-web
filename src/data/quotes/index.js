import generalQuotes from "./general.js";
import animeMangaQuotes from "./anime-manga.js";
import bookQuotes from "./book.js";
import gameQuotes from "./game.js";
import movieQuotes from "./movie.js";
import spongebobQuotes from "./spongebob.js";
import koreanDramaQuotes from "./drakor-film-artis.js";

const quotesList = () => [
  ...generalQuotes,
  ...bookQuotes,
  ...animeMangaQuotes,
  ...gameQuotes,
  ...movieQuotes,
  ...spongebobQuotes,
  ...koreanDramaQuotes,
];

export default quotesList;
