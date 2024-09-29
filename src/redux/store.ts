import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import blogCategorySlice from "./slices/blogCategorySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import blogsSlice from "./slices/blogsSlice";


const store = configureStore({
    reducer:{
        blogCategory : blogCategorySlice,
        blogs:blogsSlice
    }
})
export type RootState = ReturnType <typeof store.getState>;
export const useAppSelector : TypedUseSelectorHook<RootState>=useSelector;
export const useAppDispatch =()=> useDispatch<ThunkDispatch<RootState,any,any>>();
export default store;