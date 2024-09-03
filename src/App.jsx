import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Favourites from './pages/favourites';
import Header from './components/header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGenres } from './redux/actions';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenres())
  }, []);

  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:px-15 xl:px-20">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
