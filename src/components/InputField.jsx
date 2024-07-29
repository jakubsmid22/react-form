
const InputField = ({label, placeholder, id, required, onChange}) => {
  return (
    <div className="input-field">
        <label htmlFor={id}>{label}{required && "*"}</label>
        <input name={id} onChange={onChange} required={required} id={id} type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputField