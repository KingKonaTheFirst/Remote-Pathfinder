import React, { useState } from 'react';
import { FaBackspace } from "react-icons/fa";

const Profile = () => {
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [resume, setResume] = useState(null);

    const addSkill = () => {
        if (inputValue.trim() !== '') {
            setSkills([...skills, inputValue]);
            setInputValue('');
        }
    };

    const removeSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    return (
        <div className="text-center">
            <h1 className="heading">Profile</h1>
            <div>
                <div className="flex bg-gray-400 profile">
                    <div className="flex-1 text-center bg-gray-400 px-4 py-2 m-2">
                        <h3 className='heading2 font-bold' >Skills</h3> 
                        <ul id="list">
                            {skills.map((skill, index) => (
                                <li className='flex justify-center' key={index}>
                                    {skill}
                                    <button className='listItem' onClick={() => removeSkill(index)}><FaBackspace /></button>
                                </li>
                            ))}
                        </ul>
                        <input
                            className='input'
                            type="text"
                            id="txtVal"
                            placeholder="Enter a skill"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className='button' onClick={addSkill}>Add+</button>
                    </div>
                    <div className="flex-1 text-black text-center bg-gray-500 px-4 py-2 m-2">
                        <h3 className='heading2 font-bold'>Resume</h3>
                        {resume && (
                            <div>
                                <p>Uploaded Resume: {resume.name}</p>
                                <a href={URL.createObjectURL(resume)} download={resume.name}>Download Resume</a>
                            </div>
                        )}

                        {/* File upload input */}
                        <input
                            className='resume'
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;