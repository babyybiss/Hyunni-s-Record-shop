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
      return action.paylaod;
    }
    // ... other reducers
  }
});

export const { getAlbums, getAlbum, postAlbum } = albumReducer.actions;
export default albumReducer.reducer;
