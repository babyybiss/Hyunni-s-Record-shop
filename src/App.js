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
import ModifyAlbum from './pages/ModifyAlbum';

function App() {
const [favorites, setFavorites] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Layout />} >
        <Route index element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:albumCode" element={<AlbumDetails />} />
          <Route path="/shop/search" element={<AlbumSearchResult />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/shoppingCart" element={<ShoppingCart favorites={favorites} />} />
          <Route path="/regist" element={<RegistAlbum />} />
          <Route path="/modifyAlbum/:albumCode" element={<ModifyAlbum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
