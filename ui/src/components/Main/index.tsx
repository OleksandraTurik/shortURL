import { useAppSelector } from "../../hooks";
import Form from "../Form";
import Output from "../Output";
import "./style.css";

const Main = () => {
  const { urlInfo, loading, error } = useAppSelector(
    (state) => state.shortUrlReducer
  );

  return (
    <div className="container">
      <h1 className="title">
        Get the <span>short</span> link as you go 👋
      </h1>
      <div className="btn-wrapper">
        <Form />
        <Output
          loading={loading}
          error={error}
          value={urlInfo?.shortUrl}
          clicks={urlInfo?.clicks}
        />
      </div>
    </div>
  );
};

export default Main;
