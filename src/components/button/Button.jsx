export const Button = ({ name = 'Button', color = 'primary', type = 'button', Size = 2, onClick}) => {
  return (
    <>
      <div className={`d-grid mt-3 col-${Size}`}>
        <button type={type} className={`btn btn-${color}`} onClick={onClick}>
          {name}
        </button>
      </div>
    </>
  );
};
