import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactsState {
  items: Contact[];
}

const loadState = (): Contact[] => {
  try {
    const serializedState = localStorage.getItem("items");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const initialState: ContactsState = {
  items: loadState(),
};

const saveState = (state: Contact[]): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("items", serializedState);
  } catch (err) {
    console.log({ err });
  }
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Contact>) => {
      state.items.push(action.payload);
      saveState(state.items);
    },
    updateItem: (
      state,
      action: PayloadAction<{ id: number; updatedItem: Partial<Contact> }>
    ) => {
      const { id, updatedItem } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex] = { ...state.items[itemIndex], ...updatedItem };
        saveState(state.items);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveState(state.items);
    },
  },
});

export const { addItem, updateItem, removeItem } = contactSlice.actions;
export default contactSlice.reducer;
