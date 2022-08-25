import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';
import { IShortURl } from '../../api/types';

interface IShortUrlStore {
  urlInfo: IShortURl | null;
  loading: boolean;
  error: string | null;
}

const initialState: IShortUrlStore = {
  urlInfo: null,
  loading: false,
  error: null,
};

export const getShortUrl = createAsyncThunk('shortUrl/getShortUrl', async (originUrl: string) => {
  const res = await api.getShortUrl(originUrl);
  return res;
});

export const shortUrlSlice = createSlice({
  name: 'shortUrl',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShortUrl.fulfilled, (state, action) => {
      state.urlInfo = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getShortUrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(getShortUrl.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default shortUrlSlice.reducer;
