import { useLocation } from 'react-router-dom';

function ShoppingCart() {
  const location = useLocation();
  const favorites = location.state && location.state.favorites;

  // Use the 'favorites' state in your ShoppingCart component

  console.log(favorites);
  return (
    <>
      <h1>My shopping cart</h1>
      <div>
    
        {favorites != null ? (
          <div>
            <h2>Favorite Album:</h2>
            <p>Artist Name: {favorites.album.artistName}</p>
            <p>Album Title: {favorites.album.albumTitle}</p>
            <p>Release Year: {favorites.album.releaseYear}</p>
            <p>Genre: {favorites.album.genre}</p>
            <p>Price: ${favorites.album.price}</p>
            <img src={favorites.album.coverImage} alt="Album Cover" style={{ maxWidth: 300 }} />
          </div>
        ) : (
          <p>Your shopping cart is empty.</p>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;

