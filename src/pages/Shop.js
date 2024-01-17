import {useState, useEffect} from 'react';
import { getAlbumList } from '../api/ArtistAPI';
import AlbumItem from '../components/AlbumItem';
import boxStyle from './album.module.css'
import {useNavigate} from 'react-router-dom';

function Shop({favorites}) {

const [searchValue, setSearchValue] = useState('');
const [albumList, setAlbumList] = useState([]);
const navigate = useNavigate();

const onClickHandler = () => {
    navigate(`/shop/search?albumTitle=${searchValue}`);
}

useEffect(
    () => {
        setAlbumList(getAlbumList);
    }
)
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
                    >Search</button>
            </div>

            <div className={boxStyle.albumBox}>
                <img src={albumList.coverImage} style={{maxWidth: 300}} />
                { albumList.map(album => <AlbumItem key={album.albumCode} album={album} />)};
            </div>
        </>
    );
}

export default Shop;