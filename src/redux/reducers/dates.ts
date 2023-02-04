import { createSlice } from "@reduxjs/toolkit";
interface CurrentDate {
  displayDate: string;
  apiDate: string;
}

let date = new Date();
date.setDate(date.getDate() - 1);
let initialDisplayDate = date.toLocaleString(
  "us", {
  day: "numeric",
  timeZone: 'UTC'
})
  + " " +
  date.toLocaleString(
    "us", {
    month: "long",
    year: "numeric",
    timeZone: 'UTC'
  });

let initialApiDate = date.toISOString().split('T')[0];

// Define the initial state using that type
const initialState: CurrentDate = {
  displayDate: initialDisplayDate,
  apiDate: initialApiDate
};


export const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    resetDates: (state) => {
      let date = new Date();
      date.setDate(date.getDate() - 1);
      state.displayDate = date.toLocaleString(
        "us", {
        day: "numeric",
        timeZone: 'UTC'
      })
        + " " +
        date.toLocaleString(
          "us", {
          month: "long",
          year: "numeric",
          timeZone: 'UTC'
        });

      state.apiDate = date.toISOString().split('T')[0];
    },
  }
});

export const { resetDates } = datesSlice.actions;

export default datesSlice.reducer;
