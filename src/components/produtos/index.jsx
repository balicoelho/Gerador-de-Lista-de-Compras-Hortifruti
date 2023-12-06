const Produtos = ({
  key,
  checked,
  onCheckboxChange,
  onQuantidadeChange,
  onMedidaChange,
  children,
  value,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex mx-6 justify-center text-center">
        <div className="flex flex-col w-[50px] mr-2">
          <input
            key={key}
            type="checkbox"
            checked={checked}
            onChange={onCheckboxChange}
            className="mx-4 border h-[1.5rem]"
          />
        </div>
        <div className="flex flex-col w-[200px] text-left">
          <p key={key} className="underline">
            {children}
          </p>
        </div>
        <div className="flex flex-col w-[100px]">
          <input
            key={key}
            type="text"
            value={value}
            onChange={onQuantidadeChange}
            className="mx-4 border h-[1.5rem]"
          />
        </div>
        <div className="flex flex-col w-[100px]">
          <select key={key} name={name} onChange={onMedidaChange}>
            <option value="nada"></option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="und">UND</option>
            <option value="molho">molho</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
