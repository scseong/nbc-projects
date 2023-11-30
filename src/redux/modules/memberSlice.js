import { createSlice } from '@reduxjs/toolkit';
import { MEMBERS } from 'constants/member';

const initialState = {
  memberId: MEMBERS[0].englishName,
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    selectedMember: (state, action) => {
      state.memberId = action.payload;
    },
  },
});

export const { selectedMember } = memberSlice.actions;
export default memberSlice.reducer;
