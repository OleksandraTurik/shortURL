import React from "react";
import "./style.css";

interface IOutputprops {
  loading: boolean;
  error: string | null;
  value?: string;
  clicks?: number;
}

const Output: React.FC<IOutputprops> = ({ loading, error, value, clicks }) => {
  return (
    <div className="new-link">
      {loading && <div className="loading">Loading</div>}
      <input
        type="text"
        disabled
        placeholder="Short link"
        value={error ?? value}
      />
    </div>
  );
};

export default Output;
