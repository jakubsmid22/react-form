import InputField from "./InputField";
import { fields, radios, files, urls, selects, telNums } from "../data";
import RadioButtonGroup from "./RadioButtonGroup";
import FileInput from "./FileInput";
import URLInput from "./URLInput";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import Button from "./Button";
import { useState, useRef } from "react";
import TelNumberInput from "./TelNumberInput";

const FormContainer = () => {
  const form = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    resume: null,
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    switch (type) {
      case "checkbox":
        setFormData((prevState) => ({
          ...prevState,
          subjects: checked
            ? [...prevState.subjects, value]
            : prevState.subjects.filter((subject) => subject !== value),
        }));
        break;

      case "file":
        setFormData((prevState) => ({
          ...prevState,
          [name]: e.target.files[0],
        }));
        break;

      case "radio":
        setFormData((prevState) => ({
          ...prevState,
          gender: value,
        }));
        break;

      default:
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
    }
  };

  const handleSubmit = () => {
    console.clear();
    if (form.current.checkValidity()) {
      console.log("User info:");
      console.log("First name: " + formData.firstName);
      console.log("Last name: " + formData.lastName);
      console.log("Email: " + formData.email);
      console.log("Telephone number: " + formData.contact);
      console.log("Gender: " + formData.gender);
      console.log("Resume: " + formData.resume.name);
      console.log("About: " + "\n" + formData.about);
      alert("Form Submited!");
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <form ref={form} onSubmit={(e) => e.preventDefault()}>
      <h1>Form</h1>
      <div className="inputs-form">
        {fields.map((field) => {
          const { label, placeholder, id, required } = field;
          return (
            <InputField
              key={id}
              label={label}
              placeholder={placeholder}
              id={id}
              required={required}
              onChange={handleChange}
            />
          );
        })}

        {telNums.map((num) => {
          const { label, placeholder, id, required } = num;

          return (
            <TelNumberInput
              key={id}
              label={label}
              placeholder={placeholder}
              id={id}
              required={required}
              onChange={handleChange}
            />
          );
        })}

        {radios.map((radio) => {
          const { label, radios, required, id } = radio;
          return (
            <RadioButtonGroup
              key={id}
              label={label}
              radios={radios}
              required={required}
              onChange={handleChange}
            />
          );
        })}

        {files.map((file) => {
          const { label, id, required } = file;

          return (
            <FileInput
              key={id}
              label={label}
              id={id}
              required={required}
              onChange={handleChange}
            />
          );
        })}

        {urls.map((url) => {
          const { label, placeholder, id, required } = url;
          return (
            <URLInput
              key={id}
              label={label}
              placeholder={placeholder}
              id={id}
              required={required}
              onChange={handleChange}
            />
          );
        })}

        {selects.map((select) => {
          const { label, id, answers, required } = select;

          return (
            <SelectField
              label={label}
              id={id}
              answers={answers}
              required={required}
              key={id}
              onChange={handleChange}
            />
          );
        })}

        <TextArea onChange={handleChange} />

        <div className="buttons">
          <Button text={"Reset"} onClick={handleReset} />
          <Button text={"Submit"} onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
};

export default FormContainer;
