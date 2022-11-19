import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  font-size: 20px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hi</Text>
      </Box>
      <Box bgColor="tomato" />
    </Father>
  );
}

export default App;
