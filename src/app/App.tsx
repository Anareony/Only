import styled from "styled-components";
import { historicDates } from "shared/consts/historicDates";
import { MainPage } from "pages/MainPage";
import "./styles/global.css";

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
        <MainPage historicDates={historicDates} />
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  position: relative;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export default App;
