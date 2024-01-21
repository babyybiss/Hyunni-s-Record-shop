import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import RegistAlbum from './pages/RegistAlbum';
import MyPage from './pages/MyPage';
import AlbumDetails from './pages/AlbumDetails';
import AlbumSearchResult from './pages/AlbumSearchResult';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import {useState} from 'react';

function App() {
const [favorites, setFavorites] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Layout />} >
        <Route index element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/shoppingCart" element={<ShoppingCart favorites={favorites} />} />
          <Route path="/regist" element={<RegistAlbum />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":albumCode" element={<AlbumDetails />} />
          <Route path="search" element={<AlbumSearchResult />} />
        </Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
