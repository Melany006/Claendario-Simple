import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'
import "./App.css"

function App() {
  return (

<Container fluid className="main" >
  <Row>
  <Col sm={11}>
  </Col>
    <Col sm={1}>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Mes
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Enero</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Febrero</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Marzo</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Abril</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Mayo</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Junio</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Julio</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Agosto</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Septiembre</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Octubre</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Noviembre</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Diciembre</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Col>
    
  </Row>
  <Row>
    <h1><p className="text-center"> ENERO 2025 </p></h1>
  </Row>
  <Row>
    <Col><h3 className="day-name"><p className="text-center"> LUN </p> </h3> </Col>
    <Col><h3 className="day-name"><p className="text-center"> MAR </p></h3> </Col>
    <Col><h3 className="day-name"><p className="text-center"> MIE </p></h3> </Col>
    <Col><h3 className="day-name"><p className="text-center"> JUE </p></h3> </Col>
    <Col><h3 className="day-name"><p className="text-center"> VIE </p></h3></Col>
    <Col><h3 className="day-name"><p className="text-center"> SAB </p></h3> </Col>
    <Col><h3 className="day-name"><p className="text-center"> DOM </p></h3> </Col>
  </Row>
  <Row className="day-box">
    <Col><h6> 1 </h6></Col>
    <Col><h6> 2 </h6></Col>
    <Col><h6> 3 </h6></Col>
    <Col><h6> 4 </h6></Col>
    <Col><h6> 5 </h6></Col>
    <Col><h6> 6 </h6></Col>
    <Col><h6> 7 </h6></Col>
  </Row>
  <Row className="day-box">
    <Col><h6> 8 </h6> </Col>
    <Col><h6> 9 </h6></Col>
    <Col><h6> 10 </h6></Col>
    <Col><h6> 11 </h6></Col>
    <Col><h6> 12 </h6></Col>
    <Col><h6> 13 </h6></Col>
    <Col><h6> 14 </h6></Col> 
  </Row>
  <Row className="day-box">
    <Col><h6> 15 </h6> </Col>
    <Col><h6> 16 </h6></Col>
    <Col><h6> 17 </h6></Col>
    <Col><h6> 18 </h6></Col>
    <Col><h6> 19 </h6></Col>
    <Col><h6> 20 </h6></Col>
    <Col><h6> 21 </h6></Col>
  </Row>
  <Row className="day-box">
    <Col><h6> 22 </h6> </Col>
    <Col><h6> 24 </h6></Col>
    <Col><h6> 25 </h6></Col>
    <Col><h6> 26 </h6></Col>
    <Col><h6> 27 </h6></Col>
    <Col><h6> 28 </h6></Col>
    <Col><h6> 29 </h6></Col>
  </Row>
  <Row className="day-box">
    <Col><h6> 30 </h6> </Col>
    <Col><h6> 31 </h6></Col>
    <Col><h6>  </h6></Col>
    <Col><h6>  </h6></Col>
    <Col><h6>  </h6></Col>
    <Col><h6>  </h6></Col>
    <Col><h6>  </h6></Col>
  </Row>
</Container>
)}
export default App