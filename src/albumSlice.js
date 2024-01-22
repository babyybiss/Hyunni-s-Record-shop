// albumSlice.js
import { createSlice } from "@reduxjs/toolkit";


const albumReducer = createSlice({
  name: "album",
  initialState: {},
  reducers: {
    getAlbums: (state, action) => {
      console.log('(Album reducer: GET_ALBUMS)', action.payload);
      return action.payload;
    },
    getAlbum: (state, action) => {
      console.log('(Album reducer: GET_ALBUM)', action.payload);
      return action.payload;
    },
    postAlbum: (state, action) => {
      console.log('(Album reducer: POST_ALBUM)', action.payload);
      return action.payload;
    },
    putAlbum : (state, action) => {
      console.log('(Album reducer: PUT_ALBUM)', action.payload);
      return action.payload;
    },
    getSearchResult : (state, action) => {
      console.log('(Album reducer: GET_SEARCH_RESULT)', action.payload);
      return action.payload;
    },
    deleteAlbum : (state, action) => {
      console.log('(Album reducer: DELETE_ALBUM)', action.payload);
      return action.payload;
    },
    // ... other reducers
  }
});

export const { getAlbums, getAlbum, postAlbum, putAlbum, getSearchResult, deleteAlbum } = albumReducer.actions;
export default albumReducer.reducer;
