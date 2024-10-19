export const Input = ({ type = 'text', id, inputSize = 6, label, handleChange, ref, value }) => {
    return ( 
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">
              {label}
            </label>
            <input type={type} className="form-control" id={id} onChange={handleChange} ref={ref} value={value} />
        </div>
     );
}