import {createSlice} from '@reduxjs/toolkit';
import {PostType, UserType} from "types/types";
import {usersApi} from "app/users-api";
import {createAppAsyncThunk} from "utils/create-app-async-thunk";

const fetchUsers = createAppAsyncThunk<{ users: UserType[] }, void>(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await usersApi.getUsers();
            return {users: res.data};
        } catch (e) {
            return rejectWithValue(null);
        }
    },
);

const fetchPosts = createAppAsyncThunk<{ posts: PostType[] }, void>(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const res = await usersApi.getPosts();
            return {users: res.data};
        } catch (e) {
            return rejectWithValue(null);
        }
    },
);

const initialState: UserType[] = [];

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload.users.map((user) => ({...user}));
        })
    }
})

export const usersReducer = slice.reducer;
export const tasksThunks = {fetchUsers};
