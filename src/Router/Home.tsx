import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  height: 100vh;
`;

const Home = () => {
  return <Main></Main>;
};

export default Home;
