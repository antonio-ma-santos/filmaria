import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import './favoritos.css';

export default function Favoritos() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@movies');
    setMovies(JSON.parse(myList) || []);
  }, []);

  function handleDelete(id) {
    const movieFiltered = movies.filter((movie) => movie.id !== id);
    setMovies(movieFiltered);
    localStorage.setItem('@movies', JSON.stringify(movieFiltered));
    toast.success('Filme excluído com sucesso.');
  }

  return (
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>

      {movies.length === 0 && <span>You don't have any saved movies.</span>}

      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.nome}</span>
              <div>
                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                <button onClick={() => handleDelete(movie.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}