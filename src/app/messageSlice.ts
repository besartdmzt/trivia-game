import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Texts {
  header: string;
  content: string;
  confirm: string;
}

export interface MessageState {
  texts: Texts;
  isOpened: boolean;
}

const initialState: MessageState = {
  texts: { header: "", content: "", confirm: "" },
  isOpened: false,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    closeMessage: (state) => {
      state.isOpened = false;
      state.texts = { header: "", content: "", confirm: "" };
    },
    openMessage: (state, action: PayloadAction<Texts>) => {
      if (!state.isOpened) {
        state.isOpened = true;
        state.texts = action.payload;
      }
    },
  },
});

export const { closeMessage, openMessage } = messageSlice.actions;
export default messageSlice.reducer;
