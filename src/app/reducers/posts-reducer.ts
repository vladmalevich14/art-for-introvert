import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostType} from "types/types";
import {postsApi} from "app/api/posts-api";
import {AppDispatch} from "app/store";

export const fetchPosts = (id: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await postsApi.getAllPosts(id);
            dispatch(setPosts({posts: res.data}))
        } catch (e) {
            console.warn(e)
        }
    }
}

const slice = createSlice({
    name: 'posts',
    initialState: [] as PostType[],
    reducers: {
        setPosts: (state, action: PayloadAction<{ posts: PostType[] }>) => {
            return action.payload.posts.map((post) => ({...post}));
        }
    }
})

export const postsReducer = slice.reducer;
export const {setPosts} = slice.actions;
