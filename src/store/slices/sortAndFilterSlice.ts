import { roles } from "@/consts/roles";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  sorts: string[];
  currentSort: string;
  filters: string[];
  currentFilter: string;
  isArchived: boolean;
}

const initialState: CounterState = {
  sorts: ["Без сортировки", "По алфавиту", "Сначало моложе", "Сначало старше"],
  currentSort: "Без сортировки",
  filters: ["Все", ...roles.map((item) => item.name)],
  currentFilter: "Все",
  isArchived: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.currentSort = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
    setIsArchiveed: (state, action: PayloadAction<boolean>) => {
      state.isArchived = action.payload;
    },
  },
});

export const { setSort, setFilter, setIsArchiveed } = counterSlice.actions;

export default counterSlice.reducer;
