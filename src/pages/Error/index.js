import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <Link to="/home">Veja todos os filmes!</Link>
    </div>
  );
}