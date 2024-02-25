function CustomInputComponent({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) {
    return (
        <div className='input-box'>
            <label htmlFor={field.name}>{props.label}</label>
            <input 
            style={{'padding': '4px;',
                    'border-radius': '10px;',
                    'border': '1px solid #c1bdbd;'}}
            {...field} {...props} required />
            {touched[field.name] && errors[field.name] && <div>{errors[field.name]}</div>}
        </div>
    );
};

export default CustomInputComponent;