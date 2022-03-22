import styled from "styled-components/macro";
import { nitad18Background } from "src/assets";
import Nav from "src/ui/Nav";

const App = () => {
  return (
    <Wrapper>
      <Nav />
      <h1>Nitad18 NFT Website</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: url(${nitad18Background});
  height: 100%;
`;
export default App;
