import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: false,
    },
    reducers: {
        isConnected: (state) => {
            state.value = true
        },
        isDeconnected: (state) => {
            state.value = false
        }
    }
})

export const { isConnected, isDeconnected } = loginSlice.actions

export default loginSlice.reducer