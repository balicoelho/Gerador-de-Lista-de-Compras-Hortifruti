const Cabecalho = () => {
  return (
    <div className="flex mx-4 justify-center text-center bg-green-500">
      <p className="flex flex-col w-[50px] mr-2">Inserir</p>
      <p className="flex flex-col w-[200px] text-left">Nome do Produto</p>
      <p className="flex flex-col w-[100px]">Quantidade</p>
      <p className="flex flex-col w-[100px]">Medida</p>
    </div>
  );
};

export default Cabecalho;
