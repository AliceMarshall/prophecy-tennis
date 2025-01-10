import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface UserState extends User {
    session: string;
}

const initialState: UserState = {
    id: '',
    username: '',
    email: '',
    session: '',
};

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
        setSession: (state, action: PayloadAction<string>) => {
            state.session = action.payload;
        },
    },
});

export const { setUser, setSession } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
