export const Button = ({ name = 'Button', color = 'primary', type = 'button', Size = 2}) => {
  return (
    <>
      <div className={`d-grid mt-3 col-${Size}`}>
        <button type={type} className={`btn btn-${color}`}>
          {name}
        </button>
      </div>
    </>
  );
};
