import { ContactData, ContactResponsePayload, ContactType } from "@/interfaces/interface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// Create a new request type
export const postContact = createAsyncThunk<ContactResponsePayload, ContactData>('contact/postContact', async (contactData: ContactData) => {
    try {
        const response = await axios.post<ContactResponsePayload>(`https://hopp-server.vercel.app/create_request`, contactData)
        return response.data;
    } catch (error: any) {
        throw error.response?.data.message;
    }
})

// Fetch all request base on type
export const fetchContact = createAsyncThunk<ContactResponsePayload, string>('contact/fetchContact', async (reqType: string) => {
    try {
        const response = await axios.get<ContactResponsePayload>(`https://hopp-server.vercel.app/fetch_request/${reqType}`)
        return response.data;
    } catch (error: any) {
        throw error.response?.data.message;
    }
})

interface InitialState {
    contact: ContactType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: InitialState = {
    contact: [],
    status: 'idle',
    error: null
}

const contactSlice = createSlice({
    name: 'Contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // ─── Post Request ───
            .addCase(postContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postContact.fulfilled, (state, action) => {
                const { data } = action.payload;
                if (data && !Array.isArray(data)) {
                    state.contact.push(data);
                    state.status = 'succeeded';
                    state.error = null;
                }
            })
            .addCase(postContact.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to post assessment';
            })

            // ─── Fetch Request ───
            .addCase(fetchContact.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchContact.fulfilled, (state, action) => {
                const { data } = action.payload;
                if (Array.isArray(data)) {
                    state.contact = data;
                } else if (data) {
                    state.contact = [data];
                }
                state.status = 'succeeded';
                state.error = null;


            })
            .addCase(fetchContact.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message || 'Failed to fetch assessment';
            })
    }
})

export default contactSlice.reducer;