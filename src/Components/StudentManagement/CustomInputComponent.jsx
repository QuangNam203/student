function CustomInputComponent({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) {
    return (
        <div className='input-box'>
            <span className='details'>{props.label}</span>
            <input {...field} {...props} required />
        </div>
    );
};

export default CustomInputComponent;