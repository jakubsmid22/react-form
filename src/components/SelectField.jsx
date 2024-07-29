const SelectField = ({label, id, answers, required, onChange}) => {
  return (
    <div className="select-field">
      <label htmlFor={id}>{label} {required && "*"}</label>

      <select onChange={onChange} name={id} id={id}>
        {answers.map((answer, i) => <option key={i}  value={answer} >{answer}</option>)}
      </select>
    </div>
  );
};

export default SelectField;
