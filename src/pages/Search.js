import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  const { data: movies } = useFetch(url);

  useTitle( queryTerm)

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length > 0 ? `${movies.length} Results for '${queryTerm}'` : `No Results Found for '${queryTerm}'` }</p>
      </section>

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
