import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsBooksSlice = createSlice({
  name: 'contactsBooks',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },

    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsBooksSlice.actions;

export default contactsBooksSlice.reducer;
