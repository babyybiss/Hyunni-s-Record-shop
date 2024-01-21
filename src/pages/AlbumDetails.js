import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getAlbumDetails } from '../api/ArtistAPI';
import {useNavigate} from 'react-router-dom';
import {getSpecificAlbumApi} from '../api/AlbumAPI';
import { useSelector, useDispatch } from 'react-redux';

function AlbumDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const album = useSelector((state) => state.albums?.results?.album || []);
  // Function to navigate to the ShoppingCart component
  const navigateToShoppingCart = () => {
    navigate('/shoppingCart', { state: { favorites } });
  };

const {albumCode} = useParams();

useEffect(() => {
    dispatch(getSpecificAlbumApi(albumCode));
},[]);

/*const [album, setAlbum] = useState({
    artistName: "",
    albumTitle: "",
    releaseYear: 0,
    genre: "",
    price: 0,
    coverImage: ''
});*/

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

console.log("results? : ", album);
return (
    album && (
        <>
            <input 
            type="checkbox"
            onChange={() => {
                setIsChecked(!isChecked);
                checkbuttonHandler();
            }}
            />
            <h1>{album.title}</h1>
            <h2>{album.artist?.artistName}</h2>
            <h2>${album.albumPrice}</h2>
            <h3>genre : {album.genre?.genreName}</h3>
            <img src={album.albumFile?.fileSavePath} style={{maxWidth: 300}} />
            <br />
            {/* Button to navigate to ShoppingCart with favorites as a query parameter */}
            <button onClick={navigateToShoppingCart}>Go to ShoppingCart</button>
        </>
            )
    );
}

export default AlbumDetails;