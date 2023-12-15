const Endereco = ({ placeholder, value, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Endereco;
