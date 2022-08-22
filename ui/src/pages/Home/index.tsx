import { ShortURLForm } from '../../components/Form';
import Output from '../../components/Output';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getShortUrl } from '../../redux/slices/shortUrl';

import './style.css';

const Home = () => {
  const { urlInfo, loading, error } = useAppSelector((state) => state.shortUrlReducer);
  const dispatch = useAppDispatch();
  const handleSubmit = (value: string) => {
    dispatch(getShortUrl(value));
  };

  return (
    <div className="container">
      <h1 className="title">
        Get the <i>short</i> link as you go 👋
      </h1>
      <div className="btn-wrapper">
        <ShortURLForm submitText="Short me" onSubmit={handleSubmit} />
        <Output
          loading={loading}
          error={error}
          value={urlInfo?.shortUrl}
          clicks={urlInfo?.clicks}
          textPlaceholder="Short URL"
        />
      </div>
    </div>
  );
};

export default Home;
