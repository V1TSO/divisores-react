import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import SuccessAlert from './components/SuccessAlert';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {

  const [numero, setNumero] = useState(null);
  const [show, setShow] = useState(false);


  useEffect(() => {
  }, [numero]);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  var divisores = (numero) => {
    var divisores = [];
    numero = Math.abs(numero);
    if (numero > 10_000_000) {
      return divisores;
    }
    else {
      for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
          divisores.push(i)
        }
      }
      return divisores.join(" , ");
    }
  }


  const clickeado = () => {
    setNumero(document.getElementById("numero").value);
    if (show === false) {
      setShow(true);
    }
  }

  return (
    <div className="App main">
      <SuccessAlert show={show} setShow={setShow} element={numero} />
      <div className="d-flex justify-content-center">
        <h1>Divisores
          <small className="text-muted">
            <em> by V1TSO</em>
          </small>
        </h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <InputGroup className="">
            <InputGroup.Text id="inputGroup-sizing-default">
              Numero
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              id="numero"
              placeholder='Ingrese un numero'
              autoComplete="off"
            />
          </InputGroup>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="spacing" variant="secondary" type="submit" size="md" onClick={clickeado}>Calcular los Divisores</Button>
        </div>
      </Form>
      <div className="d-flex justify-content-center">
        <h1>{divisores(numero)}</h1>
      </div>
    </div>
  );

}
export default App;
