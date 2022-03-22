import styled from "styled-components/macro";
import { nitad18Background } from "src/assets";
import Nav from "src/ui/Nav";
import CanvasUniverse from "./CanvasUniverse";

const App = () => {
  return (
    <Wrapper>
      <Nav />
      <WrapperCanvas>
        <CanvasUniverse />
      </WrapperCanvas>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: url(${nitad18Background});
  height: 100%;
`;
const WrapperCanvas = styled.div`
  height: calc(100vh - 5rem);
`;
export default App;
