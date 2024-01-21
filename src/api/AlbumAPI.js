import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlbums, getAlbum, postAlbum } from "../albumSlice";

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

export const callGetAlbumsAPI = createAsyncThunk('albums/callGetAlbumAPI', async (status, { dispatch, getState }) => {
    try {
        const result = await request('GET', `/albums?status=${status}`);
        console.log('getAlbums result: ', result);
        dispatch(getAlbums(result));
        return result;  // This line is important to use the result in the calling component
    } catch (error) {
        console.log('Error in API call: ', error);
        throw error;
    }
});

export const getSpecificAlbumApi = createAsyncThunk('album/getSpecificAlbumApi', async (albumCode, { dispatch, getState }) => {
    try {
        console.log(albumCode);
        const result = await request('GET', `/albums/${albumCode}`);
        console.log('getSpecificAlbum result: ', result);
       dispatch(getAlbum(result));
    } catch (error) {
        console.error('Error in API call: ', error);
        throw error;
    }
});

export const callPostAlbum = createAsyncThunk('album/callPostAlbum', async ({form}, { dispatch, getState }) => {
    try {

        // Create a FormData object
        const formData = new FormData();
        formData.append('title', form.get('title'));
        formData.append('albumPrice', form.get('albumPrice'));
        formData.append('artistName', form.get('artistName'));
        formData.append('releaseDate', form.get('releaseDate'));
        formData.append('genreCode', form.get('genreCode'));

        console.log('[Album Registration]', formData.get("title"));
        console.log('[Album Registration]', formData.get("albumPrice"));
        console.log('[Album Registration]', formData.get("artistName"));
        console.log('[Album Registration]', formData.get("releaseDate"));
        console.log('[Album Registration]', formData.get("genreCode"));


        // Append the image file to FormData
        formData.append('imageFile', form.get('imageFile'));
        console.log('[Album Registration]', formData.get("imageFile"));
        const result = await request('POST', `/albums`, formData, {
            // Assuming request is a function that handles your HTTP requests
            
        });

        dispatch(postAlbum(result));
    } catch (error) {
        console.error('Error in API call: ', error);
        throw error;
    }
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