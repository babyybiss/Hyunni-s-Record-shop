import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getAlbumDetails } from '../api/ArtistAPI';
import { useNavigate, NavLink } from 'react-router-dom';
import { callGetSpecificAlbumApi, callDeleteAlbum } from '../api/AlbumAPI';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';


function AlbumDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {albumCode} = useParams();
    const album = useSelector((state) => state.albums?.results?.album || []);

  // Function to add to the ShoppingCart component
  const addToShoppingCart = () => {
    
  };


useEffect(() => {
    dispatch(callGetSpecificAlbumApi(albumCode));
},[]);

/*const [album, setAlbum] = useState({
    artistName: "",
    albumTitle: "",
    releaseYear: 0,
    genre: "",
    price: 0,
    coverImage: ''
});*/



const deleteAlbumInfo = useSelector((state) => state?.albums);

const onDeleteHandler = () => {
    
        dispatch(callDeleteAlbum(albumCode));
        
        console.log("hmmmm", deleteAlbumInfo);

        if (deleteAlbumInfo?.httpStatusCode === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Sucessfully deleted album!',
                confirmButtonColor: '#1D7151',
                iconColor: '#1D7151',
                confirmButtonText: '확인'
            });
            navigate('/shop');
            } else {
            // Handle errors
            console.error('Album deletion failed:', deleteAlbumInfo);
            Swal.fire({
                icon: 'error',
                title: 'Failed to delete album!',
                confirmButtonColor: '#1D7151',
                iconColor: "#DB524E",
                confirmButtonText: '확인'
            });
            }
    
    
};

console.log("results? : ", album);
return (
    album && (
        <>
            <div style={{display: "flex", justifyContent: "center", margin: 2+"rem"}}>
                <NavLink to={`/modifyAlbum/${album.albumCode}`}>
                    <button 
                        style={{width: 5+"rem", height: 25+"px", border: "none", borderRadius: 5 + "px", borderColor: "white"}}                
                    >Edit
                    </button>
                </NavLink>
                &emsp;&emsp;
                <button 
                    onClick={onDeleteHandler}
                    style={{width: 5+"rem", height: 25+"px", border: "none", borderRadius: 5 + "px", borderColor: "white"}}                
                >Delete
                </button>
            </div>
            <h1>{album.title}</h1>
            <h2>{album.artist?.artistName}</h2>
            <h2 style={{color: 'Red'}}>${album.albumPrice}</h2>
            <h3>genre : {album.genre?.genreName}</h3>
            <img src={`/images/${album.albumFile?.fileSaveName}`} style={{maxWidth: 300, margin: 2+"rem"}} />
            <br />
            <button 
                style={{width: 10+"rem", height: 25+"px", border: "none", borderRadius: 5 + "px", borderColor: "white"}}                
                onClick={addToShoppingCart}>add to ShoppingCart</button>
            </>
            )
    );
}

export default AlbumDetails;