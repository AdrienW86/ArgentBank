import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/reducers/loginReducer.js'

export default configureStore({
  reducer: {
    login: loginReducer,
  }
})