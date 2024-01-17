import {Link} from 'react-router-dom';
import itemStyle from './albumItem.module.css'

function AlbumItem ({album}) {

    return (
        <Link to={`/shop/${album.albumCode}`}>
            <div className={itemStyle.albumItem}>
            <img src={album.coverImage} style={{maxWidth: 150, marginTop: 20}} />
                <h1 style={{margin: 0}}>{album.albumTitle}</h1>
                <span style={{fontSize: 20}}>{album.artistName}</span><br/>
                <span>release Year: {album.releaseYear}</span>
                {/*<h2 style={{color: 'red'}}>${album.price}</h2>*/}
            </div>
        </Link>

    );
}

export default AlbumItem;