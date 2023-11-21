import { createSlice } from "@reduxjs/toolkit";
//import db from "../../Database";

const initialState = {
  //assignments: db.assignments,
  assignments: [],
  assignment: {
    title: "New Assignment",
    course: "RS101",
    due: "2023-10-17",
    points: 100,
    description: "New Description",
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        // { ...action.payload, _id: new Date().getTime().toString() },
        { ...action.payload },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload._id
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const {
  addAssignment,
  updateAssignment,
  deleteAssignment,
  setAssignment,
  setAssignments,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
