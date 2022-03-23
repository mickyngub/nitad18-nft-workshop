import styled from "styled-components/macro";
import { nitad18Background } from "src/assets";
import Nav from "src/ui/Nav";
import CanvasUniverse from "./CanvasUniverse";
import Footer from "src/ui/Footer";

const App = () => {
  return (
    <Wrapper>
      <Nav />
      <WrapperCanvas>
        <CanvasUniverse />
      </WrapperCanvas>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: url(${nitad18Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  //height: 100%;
`;
const WrapperCanvas = styled.div`
  height: calc(100vh - 5rem);
`;
export default App;
