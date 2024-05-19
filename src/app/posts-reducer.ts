import {createSlice} from '@reduxjs/toolkit';
import {PostType} from "types/types";
import {createAppAsyncThunk} from "utils/create-app-async-thunk";
import {postsApi} from "app/api/posts-api";

const fetchAllPosts = createAppAsyncThunk<{ posts: PostType[] }, string>(
    "posts/fetchAllPosts",
    async (id, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await postsApi.getAllPosts(id);
            return {posts: res.data};
        } catch (e) {
            return rejectWithValue(null);
        }
    },
);

const initialState: PostType[] = [];

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
            return action.payload.posts.map((post) => ({...post}));
        })
    }
})

export const postsReducer = slice.reducer;
export const postsThunks = {fetchAllPosts};
