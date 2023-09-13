const Input = ({name, type, placeholder, event}) => {
    return (
        <>
            <div className="mt-1">
                <input 
                    className="py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md "
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