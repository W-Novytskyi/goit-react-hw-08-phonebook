import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  operation: null,
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.operation = null;
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.operation = 'fetch';
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending](state) {
      state.operation = 'add';
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending](state, action) {
      state.operation = `${action.meta.arg}`;
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    // [deleteContact.fulfilled](state, action) {
    //   state.operation = null;
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload.id
    //   );
    // },
    [deleteContact.rejected]: handleRejected,
  },
});
export const contactsReducer = contactsSlice.reducer;
