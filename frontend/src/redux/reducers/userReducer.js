import { createSlice } from '@reduxjs/toolkit';
import { login, profile, update} from '../actions';

const INITIAL_STATE = {  
    data: {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        token: null,   
    }, 
    isAuth: false,

}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers:(builder) => {
        builder
           // .addCase(login.pending,(state)=>{state.loading = true})
            .addCase(login.fulfilled, (state, action) => {
                state.data = {...state.data, ...action.payload.data};
                state.isAuth = action.payload.isAuth
            })
            .addCase(profile.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.isAuth = action.payload.isAuth
            })
            .addCase(update.fulfilled,(state, action) => {
                state.data = action.payload.data;
                
            })
    }
})



export default userSlice.reducer




