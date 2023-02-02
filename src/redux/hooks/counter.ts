import { useAppSelector, useAppDispatch } from "./store";
import { increment, decrement, incrementByAmount } from "../reducers/counter";

export function useCounterStore() {
  const counter = useAppSelector((store) => store.counter);
  const dispatch = useAppDispatch();

  return {
    ...counter,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (value: number) => dispatch(incrementByAmount(value))
  };
}
