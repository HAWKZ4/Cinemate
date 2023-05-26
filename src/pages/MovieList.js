import { useFetch } from "../hooks/useFetch";

import { Card } from "../components";

import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath,title}) => {
  
  const url= `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
  
  const { data:movies } = useFetch(url);


  useTitle( title )

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
