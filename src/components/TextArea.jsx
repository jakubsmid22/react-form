
const TextArea = ({onChange}) => {
  return (
    <div className="textarea">
        <label htmlFor="about">About</label>
        <textarea onChange={onChange} rows={10}  name="about" id="about"></textarea>
    </div>
  )
}

export default TextArea