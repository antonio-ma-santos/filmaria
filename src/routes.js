import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/filme/:id" element={<Movie/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;