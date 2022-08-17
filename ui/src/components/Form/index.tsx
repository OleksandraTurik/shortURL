import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getShortUrl } from "../../redux/slices/shortUrl";
import "./style.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getShortUrl(inputValue));
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
        Short me!
      </button>
    </form>
  );
};

export default Form;
