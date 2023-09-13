const Input = ({name, type, placeholder, event}) => {
    return (
        <>
            <div className="formSpacing">
                <input 
                    className="py-3 px-4 w-full rounded-md"
                    name={name}
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    onChange={event}
                    required
                />
            </div>
        </>
    );
};

export default Input;