const Botao = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 w-[150px] h-8 bg-green-800 rounded-full text-gray-200 font-semibold "
    >
      Copiar lista
    </button>
  );
};

export default Botao;
