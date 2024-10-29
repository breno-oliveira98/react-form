import { forwardRef } from "react";

export const Input = forwardRef(({ type = 'text', id, inputSize = 6, label, handleChange, value }, ref) => {
    return ( 
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">
              {label}
            </label>
            <input type={type} autoComplete="off" className="form-control" id={id} onChange={handleChange} value={value} ref={ref} />
        </div>
     );
})