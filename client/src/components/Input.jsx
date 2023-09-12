const Input = ({name, type, label, placeholder, event}) => {
    return (
        <>
            <div>
                <label htmlFor="name">
                    {label}
                </label>
                <div>
                    <input 
                        name={name}
                        type={type}
                        id={name}
                        placeholder={placeholder}
                        onChange={event}
                        required
                    />
                </div>
            </div>
        </>
    );
};

export default Input;