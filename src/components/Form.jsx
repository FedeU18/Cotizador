import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #66a2fe;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 20px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #66afff;
    cursor: pointer;
  }
`;

const Form = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );
  useEffect(() => {
    const consultaAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const resupuesta = await fetch(url);
      const resultado = await resupuesta.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const obj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return obj;
      });
      setCriptos(arrayCriptos);
    };
    consultaAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({ moneda, criptomoneda });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Form;
