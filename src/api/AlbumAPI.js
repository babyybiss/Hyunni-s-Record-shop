import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlbums, getAlbum, getSearchResult, postAlbum, putAlbum, deleteAlbum } from "../albumSlice";

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

export const callGetSearchResult = createAsyncThunk('album/getSearchResult', async (searchValue, { dispatch, getState }) => {
    try {
        console.log(searchValue);
        const result = await request('GET', `/albums?sort=${searchValue}`);
        console.log('getSearchResult : ', result);
        dispatch(getSearchResult);
    } catch (error) {
        console.log('Error in API call: ', error);
        throw error;
    }
});


export const callGetSpecificAlbumApi = createAsyncThunk('album/getSpecificAlbumApi', async (albumCode, { dispatch, getState }) => {
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
        const result = await request('POST', `/albums`, form);
        console.log('postAlbum result: ', result);
        dispatch(postAlbum(result));
    } catch (error) {
        console.error('Error in API call: ', error);
        throw error;
    }
});

export const callPutAlbum = createAsyncThunk('album/callPutAlbum', async ({form}, { dispatch, getState }) => {
    try {
        const result = await request('PUT', `/albums`, form);
        console.log('putAlbum result: ', result);
        dispatch(putAlbum(result));
    } catch (error) {
        console.error('Error in API call: ', error);
        throw error;
    }
});

export const callDeleteAlbum = createAsyncThunk('/album/callDeleteAlbum', async (albumCode, { dispatch, getState }) => {
    try {
        console.log("deleting albumCode : ", albumCode);
        const result = await request('DELETE', `/albums/${albumCode}`);
        console.log("(deleteAlbum result : ", result);
        dispatch(deleteAlbum(result));
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