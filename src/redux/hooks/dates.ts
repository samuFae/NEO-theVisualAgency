import { useAppSelector, useAppDispatch } from "./store";
import { resetDates } from "../reducers/dates";

export function useDatesStore() {
  const dates = useAppSelector(store => store.dates);
  const dispatch = useAppDispatch();

  return {
    ...dates,
    resetDates: () => dispatch(resetDates())
  };
}
