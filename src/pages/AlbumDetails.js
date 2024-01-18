import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
//import { getAlbumDetails } from '../api/ArtistAPI';
import {useNavigate} from 'react-router-dom';

function AlbumDetails() {

const navigate = useNavigate();
  // Function to navigate to the ShoppingCart component
  const navigateToShoppingCart = () => {
    navigate('/shoppingCart', { state: { favorites } });
  };

const {albumCode} = useParams();

const [album, setAlbum] = useState({
    artistName: "",
    albumTitle: "",
    releaseYear: 0,
    genre: "",
    price: 0,
    coverImage: ''
});

const [isChecked, setIsChecked] = useState(false);
const [favorites, setFavorites] = useState([]);


const checkbuttonHandler = () => {
    if (!isChecked) {
        // If the checkbox is checked and you want to set 'favorites' to 'album'
        setFavorites({album});

    } else {
        // If the checkbox is not checked, you can clear the 'favorites'
        setFavorites(null);
    }

};


useEffect(() => {
    console.log('favorites : ', favorites);
}, [favorites])

return (
    <>
        <input 
        type="checkbox"
        onChange={() => {
            setIsChecked(!isChecked);
            checkbuttonHandler();
        }}
        />
        <h1>{album.albumTitle}</h1>
        <h2>{album.artistName}</h2>
        <h2>${album.price}</h2>
        <h3>genre : {album.genre}</h3>
        <img src={album.coverImage} style={{maxWidth: 300}} />
        <br />
        {/* Button to navigate to ShoppingCart with favorites as a query parameter */}
      <button onClick={navigateToShoppingCart}>Go to ShoppingCart</button>
    </>
    );
}

export default AlbumDetails;