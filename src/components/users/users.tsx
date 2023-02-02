import { useFetchUserQuery, useGetUsersQuery } from "@services/example.endpoint";
import { useState } from "react";
import styled from "styled-components";

export default function Users() {
  const [selected, setSelected] = useState<{ id: number }>();
  const { data: list } = useGetUsersQuery();
  const { data: user, isLoading } = useFetchUserQuery(selected?.id, { skip: !selected?.id });

  return (
    <Wrapper>
      <ul>
        {list?.map((u) => (
          <li key={u.id} onClick={() => setSelected(u)}>
            {u.name}
          </li>
        ))}
      </ul>
      {isLoading && <p>LOADING</p>}
      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid green;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & ul li {
    cursor: pointer;

    &:hover {
      color: green;
    }
  }

  & div {
    padding: 1rem;
    border: 2px solid hotpink;
  }
`;
