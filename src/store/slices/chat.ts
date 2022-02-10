import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users, messages } from 'data/chat';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    id: 1,
    title: 'SweetLover',
    users,
    messages,
  },
  reducers: {
    writeMessage: (state, action: PayloadAction<{ id: number; message: string }>) => {
      const { id, message } = action.payload;

      state.messages.push({
        id,
        createAt: Date.now(),
        userId: id,
        message,
      });
    },
    deleteMessage: (state, action: PayloadAction<number>) => {
      state.messages = state.messages.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { writeMessage, deleteMessage } = chatSlice.actions;

export default chatSlice.reducer;
