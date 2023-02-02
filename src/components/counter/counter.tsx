import styled from "styled-components";
import { useCounterStore } from "@store/hooks";
import { useRef } from "react";
import { Button } from "@styles/shared/button";

export default function Counter() {
  const { increment, decrement, incrementByAmount, value } = useCounterStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const incrementHandler = () => increment();
  const decrementHandler = () => decrement();

  const incrementByAmountHandler = () => {
    if (inputRef.current && !isNaN(inputRef.current?.valueAsNumber)) {
      incrementByAmount(inputRef.current.valueAsNumber);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Button bg='firebrick' color='whitesmoke' onClick={decrementHandler}>
          -
        </Button>
        <span>{value}</span>
        <Button bg='olive' color='whitesmoke' onClick={incrementHandler}>
          +
        </Button>
      </Container>

      <InputContainer>
        <label>
          Increment by <input ref={inputRef} type='number' />
        </label>
        <Button bg='navy' color='whitesmoke' onClick={incrementByAmountHandler}>
          Increment
        </Button>
      </InputContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid blue;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
`;

const InputContainer = styled.div`
  & button {
    margin-left: 3rem;
  }
`;
