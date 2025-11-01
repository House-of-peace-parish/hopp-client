import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { VolunteerData, VolunteerResponsePayload, VolunteerType } from "@/interfaces/interface";

// Create new Volunteer
export const postVolunteer = createAsyncThunk<VolunteerResponsePayload, VolunteerData>(
  "volunteer/postVolunteer",
  async (volunteerData: VolunteerData) => {
    try {
      const response = await axios.post<VolunteerResponsePayload>(
        `https://hopp-server.vercel.app/create_volunteer`,
        volunteerData
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || "Failed to create Volunteer";
    }
  }
);

// Fetch all Volunteers
export const fetchVolunteers = createAsyncThunk<VolunteerResponsePayload>(
  "volunteer/fetchVolunteers",
  async () => {
    try {
      const response = await axios.get<VolunteerResponsePayload>(
        `https://hopp-server.vercel.app/fetch_volunteer`
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data.message || "Failed to fetch Volunteers";
    }
  }
);

interface VolunteerState {
  volunteers: VolunteerType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: VolunteerState = {
  volunteers: [],
  status: "idle",
  error: null,
};

const volunteerSlice = createSlice({
  name: "Volunteer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ─── Post Volunteer ───
      .addCase(postVolunteer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postVolunteer.fulfilled, (state, action) => {
        const { data } = action.payload;
        if (data && !Array.isArray(data)) {
          state.volunteers.push(data);
        }
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(postVolunteer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to create Volunteer";
      })

      // ─── Fetch Volunteers ───
      .addCase(fetchVolunteers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVolunteers.fulfilled, (state, action) => {
        const { data } = action.payload;
        if (Array.isArray(data)) {
          state.volunteers = data;
        } else if (data) {
          state.volunteers = [data];
        }
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchVolunteers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch Volunteers";
      });
  },
});

export default volunteerSlice.reducer;