import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog_category_type } from "../../utils/type";
import axios from "axios";
// import { BLOG_API_URL } from "../../utils/constants";

interface InitialState {
  categories: Blog_category_type[];
  loading: boolean;
  error: any;
}

const initialState: InitialState = {
  categories: [],
  loading: false,
  error: null,
};
export const getAllCategories = createAsyncThunk(
  "categorySlice/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      // if you want use api url then replace the address of request
      // const res=  await axios.get(BLOG_API_URL);
      const res = await axios.get("/data/blog.json");
      return res.data.category;
    } catch (error) {
      return rejectWithValue("Error fetching API");
    }
  }
);

const blogCategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.categories = action.payload);
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        (state.error = action.payload), (state.loading = false);
      });
  },
});

export default blogCategorySlice.reducer;
