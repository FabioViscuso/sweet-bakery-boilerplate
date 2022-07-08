import { createSlice } from "@reduxjs/toolkit";

export const userLogStatus = createSlice({
    name: 'userLogStatus',
    initialState: false,
    reducers: {
        login: (state, action) => state = true,
        logout: (state, action) => state = false
    }
})