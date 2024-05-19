import {createSlice} from '@reduxjs/toolkit';
import {CommentsType, PostType} from "types/types";
import {usersApi} from "app/users-api";
import {createAppAsyncThunk} from "utils/create-app-async-thunk";

const getPost = createAppAsyncThunk<{ post: PostType }, string>(
    "posts/getPost",
    async (postId, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await usersApi.getPost(postId);
            return {post: res.data};
        } catch (e) {
            return rejectWithValue(null);
        }
    },
);

type initialStateType = {
    post: null | PostType
    comments: null | CommentsType[]
}

const initialState: initialStateType = {
    post: null,
    comments: null
};

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPost.fulfilled, (state, action) => {
            state.post = action.payload.post
        })

    }
})

export const postReducer = slice.reducer;
export const postThunks = {getPost};
