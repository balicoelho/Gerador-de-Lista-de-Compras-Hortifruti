const Endereco = ({ placeholder, inputValue, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default Endereco;
