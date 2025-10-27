import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SubscriberData, SubscriberResponsePayload, SubscriberType } from "@/interfaces/interface";

// Create new subscriber
export const postSubscriber = createAsyncThunk<SubscriberResponsePayload, SubscriberData>(
  "subscriber/postSubscriber",
  async (subscriberData: SubscriberData) => {
    try {
      const response = await axios.post<SubscriberResponsePayload>(
        `${process.env.NEXT_PUBLIC_API_URL}/create_subscriber`,
        subscriberData
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || "Failed to create subscriber";
    }
  }
);

// Fetch all subscribers
export const fetchSubscribers = createAsyncThunk<SubscriberResponsePayload>(
  "subscriber/fetchSubscribers",
  async () => {
    try {
      const response = await axios.get<SubscriberResponsePayload>(
        `${process.env.NEXT_PUBLIC_API_URL}/fetch_subscriber`
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || "Failed to fetch subscribers";
    }
  }
);

interface SubscriberState {
  subscribers: SubscriberType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubscriberState = {
  subscribers: [],
  status: "idle",
  error: null,
};

const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ─── Post Subscriber ───
      .addCase(postSubscriber.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postSubscriber.fulfilled, (state, action) => {
        const { data } = action.payload;
        if (data && !Array.isArray(data)) {
          state.subscribers.push(data);
        }
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(postSubscriber.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to create subscriber";
      })

      // ─── Fetch Subscribers ───
      .addCase(fetchSubscribers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubscribers.fulfilled, (state, action) => {
        const { data } = action.payload;
        if (Array.isArray(data)) {
          state.subscribers = data;
        } else if (data) {
          state.subscribers = [data];
        }
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchSubscribers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch subscribers";
      });
  },
});

export default subscriberSlice.reducer;