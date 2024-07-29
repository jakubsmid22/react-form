const FileInput = ({label, id, required, onChange}) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>
        {label}
        {required && "*"}
      </label>
      <input name={id} onChange={onChange} required={required} id={id} type="file" />
    </div>
  );
};

export default FileInput;
