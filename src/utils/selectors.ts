import { RootState } from "../redux/store";

export const selectBlogCategory=(state:RootState)=> state.blogCategory.categories;
export const selectBlogCategoryError = (state:RootState)=>state.blogCategory.error;

export const selectBlogFashion=(state:RootState)=> state.blogs.fashion;
export const selectBlogLifestyle = (state:RootState)=>state.blogs.lifestyle;
export const selectBlogLoading = (state:RootState)=>state.blogs.loading;
