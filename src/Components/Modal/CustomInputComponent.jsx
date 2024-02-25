function CustomInputComponent({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors ,setFieldValue}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) {
    return (
        <div className='input-Modal' style={{'padding':'10px'}}>
            <label style={{'padding-right':'10px'}} htmlFor={field.name}>{props.label}</label>
            <input className="input-Modal"
            style={{'padding': '4px',
                    'border-radius': '10px',
                    'border': '1px solid #c1bdbd'}}
            {...field} {...props} required/>
            {touched[field.name] && errors[field.name] && <div>{errors[field.name]}</div>}
        </div>
    );
};

export default CustomInputComponent;