
const URLInput = ({label, id, required, placeholder, onChange}) => {
    return (
        <div className="input-field">
          <label htmlFor={id}>
            {label}
            {required && "*"}
          </label>
          <input name={id} onChange={onChange} required={required} id={id} type="url" placeholder={placeholder} />
        </div>
      );
}

export default URLInput