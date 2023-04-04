import styled from "@emotion/styled";
import Cripto from "./assets/imagen-criptos.png";

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  return (
    <Contenedor>
      <Imagen src={Cripto} alt="Imagen-criptomonedas" />
      <Heading>Desde App</Heading>;
    </Contenedor>
  );
}

export default App;
