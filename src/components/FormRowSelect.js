

const FormRowSelect = ({name, value, options, handleJobInput, labelText}) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <select
                name={name}
                value={value}
                onChange={handleJobInput}
                className='form-select'
            >
                {
                    options.map((itemValue, index) => {
                        return (
                            <option key={index} value={itemValue}>
                                {itemValue}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default FormRowSelect