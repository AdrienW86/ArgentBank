import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import profilReducer from './reducers/profilReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profil: profilReducer,
    middleware: [thunk]
  }
})

export default store