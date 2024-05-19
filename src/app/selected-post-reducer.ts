import {createSlice} from '@reduxjs/toolkit';
import {CommentsType, PostType} from "types/types";
import {createAppAsyncThunk} from "utils/create-app-async-thunk";
import {postsApi} from "app/api/posts-api";

const getPost = createAppAsyncThunk<{ selectedPost: PostType }, string>(
    "selectedPost/getPost",
    async (postId, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await postsApi.getPost(postId);
            return {selectedPost: res.data};
        } catch (e) {
            return rejectWithValue(null);
        }
    },
);

const getComments = createAppAsyncThunk<{ comments: CommentsType[] }, string>(
    "selectedPost/getComments",
    async (postId, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await postsApi.getComments(postId);
            return {comments: res.data};
        } catch (e) {
            return rejectWithValue(null);
        }
    },
);

const editPostTitle = createAppAsyncThunk<{ postId: string, title: string }, { postId: string, title: string }>(
    "selectedPost/editPostTitle",
    async (arg, thunkAPI) => {
        const {postId, title} = arg
        const {rejectWithValue} = thunkAPI;
        const res = await postsApi.editPostTitle(postId, title);
        if (res.data) {
            return arg
        } else {
            return rejectWithValue(null);
        }
    },
);


type initialStateType = {
    postContent: null | PostType
    comments: null | CommentsType[]
}

const initialState: initialStateType = {
    postContent: null,
    comments: null
};

const slice = createSlice({
    name: 'selectedPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPost.fulfilled, (state, action) => {
                state.postContent = action.payload.selectedPost;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload.comments;
            })
            .addCase(editPostTitle.fulfilled, (state, action) => {
                if(state.postContent && state.postContent.title) {
                    state.postContent.title = action.payload.title
                }
            })

    }
})

export const selectedPostReducer = slice.reducer;
export const postThunks = {getPost, getComments, editPostTitle};
