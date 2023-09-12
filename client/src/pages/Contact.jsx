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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        setInput({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div>
            <h1>Contact</h1>
            <form action="" onSubmit={handleSubmit}>

                <Input event={handleChange}/>

                <Input event={handleChange}/>

                <Input event={handleChange}/>

                <textarea name="" id="" cols="30" rows="10" onChange={handleChange}></textarea>
            </form>
        </div>
    );
};

export default Contact;