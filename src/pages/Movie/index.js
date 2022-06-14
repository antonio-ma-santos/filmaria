import { useEffect, useState } from 'react';
import './movie-info.css';
import { useParams, useNavigate } from 'react-router-dom'; 
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  function saveMovie() {
    
    const myList = localStorage.getItem('@movies');

    const savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === movie.id);

    if (hasMovie) {
      toast.error('Você já tem esse filme salvo!');
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem('@movies', JSON.stringify(savedMovies));
    toast.success('Filme salvo com sucesso!');
  }

  useEffect(() => {
    async function loadMovie() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        navigate("/home");
        return;
      }

      setMovie(response.data);
      setLoading(false);
    }
    loadMovie();

    return () => {
      console.log('componente desmontado.');
    }

  }, [navigate, id]);

  if (loading) {
    return (
      <div className="movie-info">
        <h1>Carregando o seu filme...</h1>
      </div>
    );
  }
  
  return (
    <div className="movie-info">
      <h1>{movie.nome}</h1>
      <img src={movie.foto} alt={movie.nome} />
      <h3>Sinopse</h3>
      {movie.sinopse}

      <div className="buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${movie.nome} trailer`}>Trailer</a>
        </button>
      </div>
    </div>
  );
}