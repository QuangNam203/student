function CustomInputComponent({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) {
    return (
        <div className='input-box'>
            <span className='details'>{props.label}</span>
            <input {...field} {...props} required />
            {touched[field.name] && errors[field.name] && <div>{errors[field.name]}</div>}
        </div>
    );
};

export default CustomInputComponent;