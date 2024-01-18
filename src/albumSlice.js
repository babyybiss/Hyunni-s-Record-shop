import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
    name: "album",
    initialState: {},
    reducers: {
        getAlbums: (state, action) => {
            console.log('(Album reducer: GET_ALBUMS)', action.paylaod);
            return action.payload;
        },
        getAlbum: (state, action) => {
            console.log('(Album reducer: GET_ALBUM)', action.payload);
            return action.payload;
        },
    }
});

export const { getAlbums, getAlbum } = albumSlice.actions;
export default albumSlice.reducer;