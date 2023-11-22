import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {
        getLatestPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export const { getLatestPosts } = postSlice.actions;
export default postSlice.reducer;