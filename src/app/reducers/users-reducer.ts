import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserType} from "types/types";
import {usersApi} from "app/api/users-api";
import {AppDispatch} from "app/store";

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await usersApi.getUsers();
            dispatch(setUsers({users: res.data}))
        }catch (e) {
            console.warn(e)
        }
    }
}


const slice = createSlice({
    name: 'users',
    initialState: [] as UserType[],
    reducers: {
        setUsers: (state, action: PayloadAction<{users: UserType[] }>)=>{
             return action.payload.users.forEach((user) => {
                 state.push(user)
             })
        }
    }
})

export const usersReducer = slice.reducer;
export const {setUsers} = slice.actions;
