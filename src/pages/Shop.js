import {useState, useEffect} from 'react';
//import { getAlbumList } from '../api/ArtistAPI';
import AlbumItem from '../components/Album/AlbumItem';
import boxStyle from './album.module.css'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector, UseSelector } from 'react-redux';
import { callGetAlbumsAPI } from '../api/AlbumAPI';
import { getAlbums } from '../albumSlice';


function Shop({favorites}) {

const [searchValue, setSearchValue] = useState('');
const [albumList, setAlbumList] = useState([]);
const navigate = useNavigate();
const dispatch = useDispatch();

//extracting data using useSelector
const albums = useSelector(state => state.albums?.results?.albumList || []);

const onClickHandler = () => {
    navigate(`/shop/search?albumTitle=${searchValue}`);
}

const onRegistHandler = () => {
    navigate('/regist');
}

useEffect(() => {
    dispatch(callGetAlbumsAPI('viewAll'));
}, [dispatch]);

console.log(albums);
    return (
        <>
            <br/>
            <div>
                <input 
                    type='text'
                    name='albumTitle'
                    placeholder='Search ...'
                    onChange={(e) => {setSearchValue(e.target.value)}}
                    style={{width: 50+"%", height: 25+"px", borderRadius: 5+"px", border: "none", marginRight: 5+"px"}}
                /> 
                <button 
                    onClick={onClickHandler}
                    style={{height: 25+"px", borderRadius: 5+"px", borderColor: "white"}}
                    >Search
                </button>
                <button 
                    onClick={onRegistHandler}
                    style={{height: 25+"px", borderRadius: 5+"px", borderColor: "white"}}
                    >Regist
                </button>
            </div>

            <div className={boxStyle.albumBox}>
                {/*<img src={albumList.coverImage} style={{maxWidth: 300}} />*/}
                { albums.map(album => <AlbumItem key={album.albumCode} album={album} />)};
            </div>
        </>
    );
}

export default Shop;