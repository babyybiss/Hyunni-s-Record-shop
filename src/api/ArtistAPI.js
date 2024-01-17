import albums from '../data/artist-detail.json'

export function getAlbumList() {
    return albums;
}

export function getAlbumDetails(albumCode) {
    return albums.filter(album => album.albumCode === parseInt(albumCode))[0];
}

export function searchAlbum(searchAlbumName) {
    return albums.filter(album => album.albumTitle.match(searchAlbumName));
}
