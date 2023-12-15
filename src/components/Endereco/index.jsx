const Endereco = ({ placeholder, value, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full text-center outline-none"
    />
  );
};

export default Endereco;
