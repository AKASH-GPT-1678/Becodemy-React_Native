// hooks.ts - Create custom hooks for TypeScript support
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use these hooks instead of plain useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// slices/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the state types
export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  activeCategory : string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  activeCategory : null,
  isLoggedIn: false,
  loading: false,
  error: null,
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<string>) => {
     
      state.name = action.payload;
    
    },
    setactiveCategory: (state, action: PayloadAction<string>) => {
     
      state.activeCategory = action.payload;
    
    },

    logout: (state) => {
      // Reset to initial state on logout
      return initialState;
    },
  },

});

export const { setUserData, logout } = userSlice.actions;
export default userSlice.reducer;