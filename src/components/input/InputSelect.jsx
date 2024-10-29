export const InputSelect = ({ id, inputSize = 4 , value, label, options = [], onChange }) => {
    return ( 
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">
              {label}
            </label>
            <select id={id} className="form-select" value={value} onChange={onChange}>
              <option value={""}>Escolha...</option>
              {options.map((item, index) => {
                    return <option key={index} value={item.value}>{item.label}</option>
                })}
            </select>
        </div>
     );
}