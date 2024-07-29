const RadioButtonGroup = ({ label, radios, required, onChange }) => {
    return (
      <div>
        <p className="radio-group-label">{label} {required && "*"}</p>
  
        <div className="radio-group">
          {radios.map((radio) => {
            const { value, text } = radio;
            return (
              <div key={value} className={value}>
                <label className="radio-label" htmlFor={value}>{text}</label>
                <input onChange={onChange} required={required} type="radio" id={value} name={label} value={value} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default RadioButtonGroup;
  