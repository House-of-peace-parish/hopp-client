import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { WelfareData, WelfareResponsePayload, WelfareType } from "@/interfaces/interface";

// Create a new welfare request
export const postWelfare = createAsyncThunk<WelfareResponsePayload, WelfareData>(
  "welfare/postWelfare",
  async (welfareData: WelfareData) => {
    try {
      const response = await axios.post<WelfareResponsePayload>(
        `https://hopp-server.vercel.app/create_welfare`,
        welfareData
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || "Failed to post welfare request";
    }
  }
);

// Fetch all welfare requests
export const fetchWelfare = createAsyncThunk<WelfareResponsePayload>(
  "welfare/fetchWelfare",
  async () => {
    try {
      const response = await axios.get<WelfareResponsePayload>(
        `${process.env.NEXT_PUBLIC_API_URL}/fetch_welfare`
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || "Failed to fetch welfare data";
    }
  }
);

interface WelfareState {
  welfare: WelfareType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WelfareState = {
  welfare: [],
  status: "idle",
  error: null,
};

const welfareSlice = createSlice({
  name: "welfare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ─── Post Welfare ───
      .addCase(postWelfare.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postWelfare.fulfilled, (state, action) => {
        const { data } = action.payload;
        if (data && !Array.isArray(data)) {
          state.welfare.push(data);
        }
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(postWelfare.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to post welfare request";
      })

      // ─── Fetch Welfare ───
      .addCase(fetchWelfare.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWelfare.fulfilled, (state, action) => {
        const { data } = action.payload;
        if (Array.isArray(data)) {
          state.welfare = data;
        } else if (data) {
          state.welfare = [data];
        }
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchWelfare.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch welfare data";
      });
  },
});

export default welfareSlice.reducer;
