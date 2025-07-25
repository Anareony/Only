import styled from "styled-components";
import { historicDates } from "./shared";
import { Swipe } from "./Swipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <Layout>
        <Swipe historicDatesProps={historicDates} />
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  position: relative;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  border-inline: 1px solid #c7cdd9;

  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    width: 100%;
    height: 1px;
    background: #c7cdd9;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    height: 100%;
    background: #c7cdd9;
    z-index: -1;
  }

  @media screen and (width <= 768px) {
    &:before,
    &:after {
      display: none;
    }
  }
`;

export default App;
