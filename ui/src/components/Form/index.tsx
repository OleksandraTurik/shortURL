import "./style.css";

const Form = () => {
  return (
    <form>
      <input
        className="long-link"
        type="text"
        placeholder="http://type-your-link.here ..."
      />
      <button className="short">Short me!</button>
    </form>
  );
};

export default Form;
