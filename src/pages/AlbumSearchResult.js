import { useSearchParams } from "react-router-dom";
import boxStyle from '../components/albumItem.module.css';
import {useState, useEffect} from 'react';
//import { searchAlbum } from "../api/ArtistAPI";
import AlbumItem from "../components/AlbumItem";

function AlbumSearchResult () {

    const [searchParam] = useSearchParams();
    const [albumList, setAlbumList] = useState([]);
    const searchAlbumName = searchParam.get('albumTitle');
    
  



    return (
        <>
            <h3>album searched ... '{searchAlbumName}'</h3>
            <div className={boxStyle.albumBox}>
                {albumList.map(album => <AlbumItem key={album.artistCode} album={album}/>)}
            </div>
        </>
    );
}

export default AlbumSearchResult;