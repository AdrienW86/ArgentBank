import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginUrl =  "http://localhost:3001/api/v1/user/login"
const profileUrl = "http://localhost:3001/api/v1/user/profile"

export const login = createAsyncThunk(
    'user/login',
    async ({email, password}) => {
        const response = await axios.post(loginUrl, {
            email: email,
            password: password 
        })
        localStorage.setItem('token', response.data.body.token)
        localStorage.setItem('isAuth', true)
        console.log(response.data)
        return  { data: response.data.body, isAuth: true}
    }
)

export const profile = createAsyncThunk(
    'user/profil',
    async (config) => {
        const response = await axios.post(profileUrl, {},config)
        console.log(response.data)
        return { data: response.data.body, isAuth: true}
    }

)