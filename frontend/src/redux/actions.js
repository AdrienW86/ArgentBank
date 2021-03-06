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
        return  { data: response.data.body, isAuth: true}
    }
)

export const profile = createAsyncThunk(
    'user/profil',
    async () => {
        let token = localStorage.getItem('token')
    let config = {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    }
        const response = await axios.post(profileUrl,{},config)
        return { data: response.data.body, isAuth: true}
    }
)

 export const update = createAsyncThunk(
     'user/update',
     async (config, firstName, lastName) => {
        
         const response = await axios.update(profileUrl,firstName,lastName, config )
         return { data: response.data.body, isAuth: true}
     }
)