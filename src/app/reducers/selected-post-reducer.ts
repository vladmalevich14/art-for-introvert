import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommentsType, PostType} from "types/types";
import {postsApi} from "app/api/posts-api";
import {AppDispatch} from "app/store";

export const getPost = (postId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await postsApi.getPost(postId);
            dispatch(setPost({selectedPost: res.data}))
        } catch (e) {
            console.warn(e)
        }
    }
}

export const getComments = (postId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await postsApi.getComments(postId);
            dispatch(setComments({comments: res.data}))
        } catch (e) {
            console.warn(e)
        }
    }
}

export const editPostTitle = (postId: string, title: string) => {
    return (dispatch: AppDispatch) => {
        postsApi.editPostTitle(postId, title)
            .then(() => {
                dispatch(changePostTitle({postId, title}))
            }).catch((e) => {
            console.warn(e)
        })
    }
}

type initialStateType = {
    postContent: null | PostType
    comments: null | CommentsType[]
}

const slice = createSlice({
    name: 'selectedPost',
    initialState: {
        postContent: null,
        comments: null
    } as initialStateType,
    reducers: {
        setPost: (state, action: PayloadAction<{ selectedPost: PostType }>) => {
            state.postContent = action.payload.selectedPost
        },
        setComments: (state, action: PayloadAction<{ comments: CommentsType[] }>) => {
            state.comments = action.payload.comments
        },
        changePostTitle: (state, action: PayloadAction<{ postId: string, title: string }>) => {
            const index = state.postContent !== null && state.postContent.id === +action.payload.postId
            if (state.postContent !== null && index) state.postContent.title = action.payload.title
        },
    }
})

export const selectedPostReducer = slice.reducer;
export const {setPost, setComments, changePostTitle} = slice.actions;
