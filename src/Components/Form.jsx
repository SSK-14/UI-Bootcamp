import React, { useState } from "react";
import AddButton from "./AddButton";
import "./styles.css";

export const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    const finalValues = {
      name: inputs.name,
      image: {
        medium: inputs.image,
      },
      language: inputs.language,
      rating: {
        average: inputs.rating,
      },
    };

    console.log(finalValues);
  };

  return (
    <form>
      <label>
        Enter Movie name:
        <input
          type='text'
          name='name'
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Language:
        <input
          type='text'
          name='language'
          value={inputs.language || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Image URL:
        <input
          type='text'
          name='image'
          value={inputs.image || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Rating:
        <input
          type='number'
          name='rating'
          value={inputs.rating || ""}
          onChange={handleChange}
        />
      </label>
      <AddButton onClick={() => handleSubmit()}>Submit</AddButton>
    </form>
  );
};
export default Form;
