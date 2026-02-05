import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );

     
      localStorage.setItem("token", res.data.accessToken);

      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Login failed");
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "https://dummyjson.com/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch {
      return thunkAPI.rejectWithValue("Access Token is required");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.profile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;