import "./styles.css";

function List({ title, director, releaseDate }) {
  return (
    <div>
      <h1 className="h1">Film : {title}</h1>

      <h3>
        Producent: {director} ({releaseDate})
      </h3>
    </div>
  );
}

export default List;
