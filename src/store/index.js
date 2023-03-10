import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import taskReducer from './slices/taskPackSlice';
import uiReducer from './slices/hideShowSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    taskPacks: taskReducer,
    uiShow: uiReducer,
  },
});
