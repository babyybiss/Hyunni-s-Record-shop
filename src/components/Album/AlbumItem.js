import {Link} from 'react-router-dom';
import itemStyle from '../albumItem.module.css'

function AlbumItem ({album}) {

    return (
        album && (
            <div style={{display: "inline-flex", justifyContent: "space-between"}}>
        <Link to={`/shop/${album.albumCode}`}>
            <div className={itemStyle.albumItem}>
            <img src={`/images/${album.albumFile?.fileSaveName}`} style={{maxWidth: 150, maxHeight: 150, marginTop: 20}} />
            {album.title && album.title.length < 12 ? <h1 style={{margin: 0}}>{album.title}</h1> : <h2 style={{margin: 0}}>{album.title}</h2>}
                <span style={{fontSize: 20}}>{album.artist.artistName}</span><br/>
                <span>release Date: {album.releaseDate}</span>
                {/*<h2 style={{color: 'red'}}>${album.price}</h2>*/}
            </div>
        </Link>
        </div>
        )
    );
}

export default AlbumItem;