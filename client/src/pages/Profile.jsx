import React, { useState } from 'react';

const Profile = () => {
    // Use React state to manage the list of skills
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addSkill = () => {
        if (inputValue.trim() !== '') {
            setSkills([...skills, inputValue]);
            setInputValue(''); // Clear the input field after adding a skill
        }
    };

    return (
        <div className="text-center">
            <h1 className="heading">Profile</h1>
            <div>
                <div className="about">Placeholder text</div>
                <div className="flex bg-gray-400 profile">
                    <div className="flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                        Skills 
                        <ul id="list">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            id="txtVal"
                            placeholder="Enter a skill"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={addSkill}>Add Skill</button>
                    </div>
                    <div className="flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
                        Resume
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;