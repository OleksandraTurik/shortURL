import Form from "../Form";
import "./style.css";

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">
        Get the <span>short</span> link as you go 👋
      </h1>
      <div className="btn-wrapper">
        <Form />
        <input className="new-link" type="text" placeholder="Short link" />
      </div>
    </div>
  );
};

export default Main;
