import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/user/Login';
import { Register } from './pages/user/Register';
import RegistAlbum from './pages/RegistAlbum';
import MyPage from './pages/MyPage';
import AlbumDetails from './pages/AlbumDetails';
import AlbumSearchResult from './pages/AlbumSearchResult';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import {useState} from 'react';
import ModifyAlbum from './pages/ModifyAlbum';
import { useContext } from 'react';
import AuthContext from './components/auth/AuthContext';
import { jwtDecode } from 'jwt-decode';


function App() {
const [favorites, setFavorites] = useState(null);

const authCtx = useContext(AuthContext);
const token = authCtx.token;

console.log("token??: ", token);

const decodedToken = token ? jwtDecode(token) : null;
console.log('Decoded Token:', decodedToken);


  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Layout />} >
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

          <Route path='/'>
          <Route index element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:albumCode" element={<AlbumDetails />} />
          <Route path="/shop/search" element={<AlbumSearchResult />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/shoppingCart" element={<ShoppingCart favorites={favorites} />} />
          <Route path="/regist" element={<RegistAlbum />} />
          <Route path="/modifyAlbum/:albumCode" element={<ModifyAlbum />} />
          </Route>

      </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
