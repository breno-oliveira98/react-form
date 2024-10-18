export const InputSelect = ({ id, inputSize = 4 , label }) => {
    return ( 
        <div className={`col-md-${inputSize}`}>
            <label htmlFor={id} className="form-label">
              {label}
            </label>
            <select id={id} class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
        </div>
     );
}