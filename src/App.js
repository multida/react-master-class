import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 100px;
    }
    100% {
      transform: rotate(360deg);
    border-radius: 0;
    }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: paleturquoise;
  animation: ${rotateAnimation} 1s linear infinite;

  span {
    font-size: 36px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😎</span>
      </Box>
    </Wrapper>
  );
}

export default App;
