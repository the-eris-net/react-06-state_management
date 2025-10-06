import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk(
  'posts/fetchPokemon',
  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    await new Promise(resolve => setTimeout(resolve, 2000));
    return response.json();
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending.type, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled.type, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected.type, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;