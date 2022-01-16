import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 10em;
  height: 10em;
  & div {
    margin-right: 0.5em;
  }

  @keyframes spinner {
    0% {
      transform: scaleY(0);
    }

    25% {
      transform: scaleY(0.7);
    }

    50% {
      transform: scaleY(1);
    }

    75% {
      transform: scaleY(0.7);
    }

    100% {
      transform: scaleY(0);
    }
  }
`;

const LoadingBoxOne = styled.div`
  width: 0.5em;
  height: 2em;
  background-color: white;
  animation: 1s linear infinite spinner;

  animation-delay: 0.1s;
  transform-origin: bottom center;
`;

const LoadingBoxTwo = styled.div`
  background-color: white;
  width: 0.5em;
  height: 2.5em;
  animation: 1s linear infinite spinner;

  animation-delay: 0.2s;
  transform-origin: bottom center;
`;

const LoadingBoxThree = styled.div`
  background-color: white;
  width: 0.5em;
  height: 3em;
  animation: 1s linear infinite spinner;

  animation-delay: 0.3s;
  transform-origin: bottom center;
`;

const LoadingBoxFour = styled.div`
  background-color: white;
  width: 0.5em;
  height: 3.5em;
  animation: 1s linear infinite spinner;
  animation-delay: 0.4s;
  transform-origin: bottom center;
`;

const LoadingBoxFive = styled.div`
  background-color: white;
  width: 0.5em;
  height: 3.8em;
  animation: 1s linear infinite spinner;
  animation-delay: 0.5s;
  transform-origin: bottom center;
`;

const LoadingName = styled.p`
  margin-top: 1em;
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;
  color: ${(props) => props.theme.colors.white.white};
`;

const Loader = () => {
  return (
    <Main>
      <Loading>
        <LoadingBoxOne></LoadingBoxOne>
        <LoadingBoxTwo></LoadingBoxTwo>
        <LoadingBoxThree></LoadingBoxThree>
        <LoadingBoxFour></LoadingBoxFour>
        <LoadingBoxFive></LoadingBoxFive>
      </Loading>
      <LoadingName>Loading...</LoadingName>
    </Main>
  );
};

export default Loader;
