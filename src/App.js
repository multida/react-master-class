import styled from "styled-components";

const Father = styled.div``;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="https://naver.com">
        NAVER
      </Btn>
    </Father>
  );
}

export default App;
