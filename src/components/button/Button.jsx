export const Button = ({ name = 'Button', color = 'primary', type = 'button'}) => {
  return (
    <>
      <div className="d-grid col-2">
        <button type={type} className={`btn btn-${color}`}>
          {name}
        </button>
      </div>
    </>
  );
};
