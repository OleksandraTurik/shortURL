import React from 'react';
import { Loading } from '../Loading';
import './style.css';

interface IOutputProps {
  loading: boolean;
  error: string | null;
  value?: string;
  clicks?: number;
  textPlaceholder: string;
}

const Output: React.FC<IOutputProps> = ({ loading, error, value, textPlaceholder }) => {
  return (
    <div className="new-link">
      <div className="loading">
        <Loading loading={loading} />
      </div>
      <input type="text" disabled placeholder={textPlaceholder} value={error ?? value} />
    </div>
  );
};

export default Output;
