import { useState } from 'react';
import Input from "../components/Input";

const Contact = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        console.log("tracking");
    };

    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;