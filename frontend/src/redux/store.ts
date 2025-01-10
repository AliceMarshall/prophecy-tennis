// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

// // Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppStore = typeof store
