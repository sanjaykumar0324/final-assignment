import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog_type } from "../../utils/type";
import axios from "axios";
//import { BLOG_API_URL } from "../../utils/constants";

interface BlogCategory {
  title: string;
  image?: string;
  posts: Blog_type[];
}
interface InitialState {
  fashion: BlogCategory;
  lifestyle: BlogCategory;
  spotlight: BlogCategory;
  loading: boolean;
  error: any;
}

const initialState: InitialState = {
  fashion: { title: "", image: "", posts: [] },
  lifestyle: { title: "", image: "", posts: [] },
  spotlight: { title: "", image: "", posts: [] },
  loading: false,
  error: null,
};
export const getAllBlogs = createAsyncThunk(
  "blogSlice/getAllBlogs",
  async (_, { rejectWithValue }) => {
    try {
      // if you want use api url then replace the address of request

      // const res=  await axios.get(BLOG_API_URL);

      const res = await axios.get("/data/blog.json");
      return res.data.blogs;
    } catch (error) {
      return rejectWithValue("Error fetching API");
    }
  }
);

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.fashion = action.payload.fashion;
        state.lifestyle = action.payload.lifestyle;
        state.spotlight = action.payload.spotlight;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
