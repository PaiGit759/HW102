import { useEffect, useState } from "react";
import List from "./List";
import "./styles.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = `
   {
    allFilms {
      films {
        title
        director
        releaseDate
    }
      }    
  }
  `;

  useEffect(() => {
    setLoading(true);

    fetch(`https://swapi-graphql.netlify.app/.netlify/functions/index`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    })
      .then((response) => response.json())

      .then(setData)

      .then(() => setLoading(false))
      .catch(setError);

    console.log(data);
  }, []);

  if (loading) return <h2> ... Loading </h2>;
  if (error) return <pre> {JSON.stringify(error)} </pre>;
  if (!data) return null;

  return (
    <div className="App">
      <h2>Star Wars films : </h2>
      {data.data.allFilms.films.map((list) => (
        <List
          title={list.title}
          director={list.director}
          releaseDate={list.releaseDate}
        />
      ))}
    </div>
  );
}

export default App;
