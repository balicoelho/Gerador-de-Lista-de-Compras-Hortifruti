import { useState } from "react";
import produtos from "../../database";
import Produtos from "../../components/produtos";
import Cabecalho from "../../components/cabecalho";
import Botao from "../../components/Botao";
import Rodape from "../../components/Rodape";

const Inicio = () => {
  const [checkboxStates, setCheckboxStates] = useState(
    produtos.map((produto) => ({ id: produto.id, value: false }))
  );

  const [quantidade, setQuantidade] = useState(
    produtos.map((produto) => ({ id: produto.id, value: "" }))
  );

  const [medida, setMedida] = useState(
    produtos.map((produto) => ({ id: produto.id, value: "" }))
  );

  const handleInputChange = (stateSetter, inputId, newValue) => {
    stateSetter((prevInputs) =>
      prevInputs.map((input) =>
        input.id === inputId ? { ...input, value: newValue } : input
      )
    );
  };

  const handleCheckboxChange = (produtoId) => {
    setCheckboxStates((prevStates) =>
      prevStates.map((state) =>
        state.id === produtoId ? { ...state, value: !state.value } : state
      )
    );
  };

  const selecionados = checkboxStates
    .filter((state) => state.value)
    .map((state) => state.id);

  const lista = produtos
    .filter((produto) => selecionados.includes(produto.id))
    .map((produto) => {
      const valor =
        quantidade.find((input) => input.id === produto.id)?.value || "";
      const medidaUnit =
        medida.find((input) => input.id === produto.id)?.value || "";
      return `${produto.nome} - ${valor} ${medidaUnit}`;
    });

  return (
    <div className="flex flex-col w-full">
      <div className="justify-center items-center m-6 bg-green-800 text-gray-200">
        <h1 className="text-center font-extrabold text-[40px]">
          Gerador de Lista de Compras Hortifruti
        </h1>
      </div>
      <div className="flex w-full justify-center">
        <div className="m-6 flex flex-col">
          <Cabecalho />
          <div className="flex m-6 justify-center text-center">
            <div className="flex flex-col">
              {produtos.map((produto, index) => {
                return (
                  <Produtos
                    key={produto.id}
                    children={produto.nome}
                    checked={checkboxStates.value}
                    name={medida.value}
                    onCheckboxChange={() => handleCheckboxChange(produto.id)}
                    onMedidaChange={(e) =>
                      handleInputChange(setMedida, produto.id, e.target.value)
                    }
                    onQuantidadeChange={(e) =>
                      handleInputChange(
                        setQuantidade,
                        produto.id,
                        e.target.value
                      )
                    }
                    value={quantidade.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="m-6 w-6/12 justify-center text-center border-red-950 border-2">
          <div className="flex justify-center items-center my-5">
            <h1 className="text-xl font-bold mr-5 ">Lista de compras</h1>
            <Botao />
          </div>
          <ul>
            {lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Inicio;
