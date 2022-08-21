import React, { useState } from 'react';
import './style.css';

interface IProps {
  submitText: string;
  onSubmit: (value: string) => void;
}

const Form: React.FC<IProps> = ({ submitText, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={inputValue}
        className="long-link"
        type="text"
        placeholder="http://type-your-link.here ..."
      />
      <button className="short" type="submit">
        {submitText}
      </button>
    </form>
  );
};

export default Form;
