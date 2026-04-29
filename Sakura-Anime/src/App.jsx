import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import sakuraBranch from "./assets/SakuraAnime/sakuraBranch.png";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import NavBar from "./NavBar";

import WorkInProgress from "./Components/WorkInProgress";

function App() {
  return (
    <div>
      <BrowserRouter>
      <WorkInProgress />
        <Container fluid className="branchContainer p-0 m-0">

          <Image className="sakuraBranch" src={sakuraBranch} />

          <NavBar></NavBar>

        </Container>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
