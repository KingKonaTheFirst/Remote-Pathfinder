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
        <div className='flex overflow-hidden contactForm'>
            <h1 className="heading">Contact</h1>
            <form className="text-white formSpacing" onSubmit={handleSubmit}>

                <Input
                name={'name'}
                type={'text'}
                placeholder='Your Name'
                event={handleChange}
                />

                <Input 
                name={'email'}
                type={'email'}
                placeholder='example@testmail.com'
                event={handleChange}
                />

                <Input 
                name={'subject'}
                type={'text'}
                placeholder='Subject'
                event={handleChange}
                />

                <textarea 
                name='message'
                type='text'
                placeholder='Message Here'
                id='message'
                className='py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md h-[10rem]' 
                onChange={handleChange} />

                <button
                    type='submit'
                    className='py-2 px-8 border border-secondary rounded-3xl bg-secondary text-white font-bold hover:text-secondary hover:bg-transparent transform hover:scale-110 duration-500'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;