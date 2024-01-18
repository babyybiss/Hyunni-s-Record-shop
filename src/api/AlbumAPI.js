import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const DOMAIN = 'http://localhost:8001'

export const request = async( method, url, data ) => {
    return await axios({
        method,
        url: `${DOMAIN}${url}`,
        data
    })
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const callGetAlbumsAPI = createAsyncThunk('album/callGetAlbumAPI', async (status, { dispatch, getState }) => {
    const result = await request('GET', `/albums?status=${status}`);
    console.log('getAlbums result: ', result);
    return result;
});


/*

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


*/