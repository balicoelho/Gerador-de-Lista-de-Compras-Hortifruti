import React, { useState, useEffect } from "react";
import produtos from "../../database";
import Produtos from "../../components/produtos";
import Cabecalho from "../../components/cabecalho";
import Botao from "../../components/Botao";
import Rodape from "../../components/Rodape";
import copy from "clipboard-copy";
import TextInput from "../../components/Endereco";

const Inicio = () => {
  const [inputValue, setInputValue] = useState(
    JSON.parse(localStorage.getItem("inputValue")) || ""
  );

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    localStorage.setItem("inputValue", JSON.stringify(newValue));
  };

  const [checkboxStates, setCheckboxStates] = useState(
    JSON.parse(localStorage.getItem("checkboxStates")) ||
      produtos.map((produto) => ({ id: produto.id, value: false }))
  );

  const [quantidade, setQuantidade] = useState(
    JSON.parse(localStorage.getItem("quantidade")) ||
      produtos.map((produto) => ({ id: produto.id, value: "" }))
  );

  const [medida, setMedida] = useState(
    JSON.parse(localStorage.getItem("medida")) ||
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

  useEffect(() => {
    localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
    localStorage.setItem("medida", JSON.stringify(medida));
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
  }, [checkboxStates, quantidade, medida, inputValue]);

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

  const handleClick = () => {
    const elementoParaCopiar = document.querySelector(".listaCompras");
    const elementotxt1 = elementoParaCopiar.querySelectorAll(".text1");
    const text1Copiado = Array.from(elementotxt1)
      .map((item) => item.textContent)
      .join("\n");
    const elementotext2 = elementoParaCopiar.querySelectorAll(".text2");
    const text2Copiado = Array.from(elementotext2)
      .map((item) => item.textContent)
      .join("\n");

    const itensLista = elementoParaCopiar.querySelectorAll("li");
    const textoCopiado = Array.from(itensLista)
      .map((item) => item.textContent)
      .join("\n");

    copy(
      text1Copiado +
        "\n" +
        inputValue +
        "\n" +
        text2Copiado +
        "\n" +
        textoCopiado
    );
  };

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
                const medidaAtual = medida.find(
                  (input) => input.id === produto.id
                ) || { value: "" };
                return (
                  <Produtos
                    key={index}
                    children={produto.nome}
                    checked={
                      checkboxStates.find((state) => state.id === produto.id)
                        ?.value || false
                    }
                    name={medidaAtual.value}
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
                    value={
                      quantidade.find((input) => input.id === produto.id)
                        ?.value || ""
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="m-6 w-6/12 justify-center text-center border-red-950 border-2">
          <div className="flex justify-center items-center my-5">
            <h1 className="text-xl font-bold mr-5 ">Lista de compras</h1>
            <Botao onClick={handleClick} />
          </div>
          <div className="listaCompras ">
            <p className="text1">
              Olá! Gostaria de solicitar o pedido abaixo para entrega domiciliar
              no endereço:
            </p>
            <TextInput
              placeholder="Digite seu endereço..."
              handleChange={handleChange}
              value={inputValue}
            />
            <p className="text2">Forma de pgto: cartao de credito. Obrigada!</p>
            <ul>
              {lista.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
};

export default Inicio;
