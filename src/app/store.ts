import { configureStore } from '@reduxjs/toolkit'
import {usersReducer} from "app/reducers/users-reducer";
import {postsReducer} from "app/reducers/posts-reducer";
import {selectedPostReducer} from "app/reducers/selected-post-reducer";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        selectedPost: selectedPostReducer,
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch