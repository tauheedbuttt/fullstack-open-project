import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { breadcrumbSlice } from "./breadcrumbSlice";
import { modalSlice } from "./modalSlice";
import { authReducer } from "./authSlice";

// Custom storage engine using js-cookie
const cookieStorage = {
  getItem: (key: string) => {
    const value = Cookies.get(key);
    return value ? Promise.resolve(value) : Promise.resolve(null);
  },
  setItem: (key: string, value: string) => {
    Cookies.set(key, value, { expires: 7 });
    return Promise.resolve();
  },
  removeItem: (key: string) => {
    Cookies.remove(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: cookieStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  breadcrumb: breadcrumbSlice.reducer,
  modal: modalSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Define RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
