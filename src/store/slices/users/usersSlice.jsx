import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersApi";

const  usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser(state, {payload}){
            state.currentUser = state.usersData.find(user => (user.email === payload.log || user.username === payload.log) && user.password === payload.password)
        },
        addNewUserPost(state, {payload}){
            let idx = state.usersData.find(el => el.id === state.currentUser.id)
            state.currentUser.posts.unShift({
                ...payload,
                comments: []
            })
            state.usersData[idx].posts.unShift({
                ...payload,
                comments: []
            })
        }
    },

    extraReducers: {
            [fetchUsers.fulfilled]: (state, {payload}) => {
                return {
                    ...state,
                    usersData: [...payload]
                }
            }
    }
})

export const selectUsers = state => state.users

export const {toggleCurrentUser, addNewUserPost} = usersSlice.actions

export const usersReducer = usersSlice.reducer