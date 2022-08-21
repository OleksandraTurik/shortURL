import './style.css';

interface IProps {
  loading: boolean;
}

export const Loading: React.FC<IProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};
