import { TEmployee } from "@/types/TEmployee";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Employess from "../../../employees.json";

export interface CounterState {
  employees: TEmployee[];
}

const initialState: CounterState = {
  employees: JSON.parse(JSON.stringify(Employess)),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Omit<TEmployee, "id">>) => {
      state.employees.push({
        ...action.payload,
        id: state.employees.length + 1,
      });
    },
    editEmployee: (state, action: PayloadAction<TEmployee>) => {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          return action.payload;
        }
        return employee;
      });
    },
  },
});

export const { addEmployee, editEmployee } = counterSlice.actions;

export default counterSlice.reducer;
