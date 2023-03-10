import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { showUi: false },
  reducers: {
    toggleUiShow(state) {
      state.showUi = !state.showUi;
    },
  },
});

export const { toggleUiShow } = uiSlice.actions;
export default uiSlice.reducer;
