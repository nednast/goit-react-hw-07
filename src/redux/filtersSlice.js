import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",

  initialState: { name: "" },

  reducers: {
    filterContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.name;
export const filtersReducer = filtersSlice.reducer;
