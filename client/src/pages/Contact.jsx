import { useState, useRef } from 'react';
import Input from "../components/Input";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const form = useRef();

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uds51km', 'template_36d3iy2', form.current, 'RG00fl_M1OlduzjPs')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='container'>
            <h1>Contact</h1>
            <form ref={form} className="text-white py-20 w-[95%] md:w-[70%] lg:w-[60%] m-auto" onSubmit={sendEmail}>

                <Input
                name='name'
                type='text'
                placeholder='Your Name'
                event={handleChange}
                />

                <Input 
                name='email'
                type='email'
                placeholder='example@testmail.com'
                event={handleChange}
                />

                <Input 
                name='subject'
                type='text'
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
                    value='Send'
                    className='py-2 px-8 border border-secondary rounded-3xl bg-secondary text-white font-bold hover:text-secondary hover:bg-transparent transform hover:scale-110 duration-500'
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;