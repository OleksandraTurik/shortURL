import { ShortURLForm } from '../../components/Form';
import Output from '../../components/Output';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getValidateUrl } from '../../redux/slices/validateUrl';

import './style.css';

const Validate = () => {
  const { originUrl, loading, error } = useAppSelector((state) => state.validateUrlReducer);
  const dispatch = useAppDispatch();
  const handleSubmit = (value: string) => {
    dispatch(getValidateUrl(value));
  };

  return (
    <div className="container">
      <h1 className="title">
        Get the <i>validate</i> link!
      </h1>
      <div className="btn-wrapper">
        <ShortURLForm submitText="Validate me" onSubmit={handleSubmit} />
        <Output
          loading={loading}
          error={error}
          value={originUrl ?? ''}
          textPlaceholder="Origin URL"
        />
      </div>
    </div>
  );
};

export default Validate;
