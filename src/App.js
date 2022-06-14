import './styles.css';
import RoutesApp from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className='app'>
      <RoutesApp/>
      <ToastContainer autoClose={3000} />
    </div>
  );
}