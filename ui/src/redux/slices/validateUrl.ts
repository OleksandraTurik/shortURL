import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';

interface IValidateUrlStore {
  originUrl: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IValidateUrlStore = {
  originUrl: null,
  loading: false,
  error: null,
};

export const getValidateUrl = createAsyncThunk(
  'validateUrl/getValidateUrl',
  async (shortUrl: string) => {
    const res = await api.getOriginUrl(shortUrl);
    return res;
  },
);

export const validateUrlSlice = createSlice({
  name: 'validateUrl',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValidateUrl.fulfilled, (state, action) => {
      state.originUrl = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getValidateUrl.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Something went wrong';
    });
    builder.addCase(getValidateUrl.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default validateUrlSlice.reducer;
