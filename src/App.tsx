import Legend from "@components/legend/Legend";
import Logo from "@components/logo/Logo";
import { MainContent } from "@components/main-content/MainContent";
import Speed from "@components/speed/Speed";
import { backgroundFilter, padding, pxToRem } from "@styles/shared/shared";
import styled from "styled-components";

export default function App() {
  return (
    <BGImage>
      <Layout>
        <MainContent />
        <Aside>
          <Speed />
          <Legend />
        </Aside>
        <Logo />
      </Layout>
    </BGImage>
  );
}

const Layout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: [gap] minmax(${padding(1.5)}, 5%) [header] 60% [aside] 35%;
  grid-template-rows: [gap] ${padding(3)} [content] 1fr [logo] ${padding(3)};
  min-height: 100vh;
`;

const BGImage = styled.div`
  position: relative;
  background-image: url("galaxy.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  &:before {
    content: "";
    position: absolute;
    background: ${backgroundFilter};
    backdrop-filter: blur(${pxToRem(2.5)});
    width: 100%;
    height: 100%;
  }
`;

const Aside = styled.aside`
  position: relative;
  z-index: 1;
  grid-column: aside;
  grid-row: content;
  display: grid;
  grid-template-columns: [content] 1fr [gap] minmax(${padding(1.5)}, 20%);
  grid-template-rows: [speed] 33% [gap] ${padding(0.5)} [legend] calc(66% - ${padding(1.5)}) [gap] 1rem;
`;