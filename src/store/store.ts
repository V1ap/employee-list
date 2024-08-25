import { configureStore } from "@reduxjs/toolkit";
import ReducerEmployeesStore from "@/store/slices/employeesSlice";
import ReducerSortAndFilter from "@/store/slices/sortAndFilterSlice";

export const store = configureStore({
  reducer: {
    employees: ReducerEmployeesStore,
    sortAndFilter: ReducerSortAndFilter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
