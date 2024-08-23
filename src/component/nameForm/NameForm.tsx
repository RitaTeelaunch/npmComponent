import React, { useState } from 'react';
import '../styles/NameForm.module.css';
const NameForm: React.FC  = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="container">
            <p> Welcome </p>
            <div className="inputGroup">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input"
                />
            </div>
            <button
                className={`${"button"} ${isClicked ? "buttonClicked" : ''}`}
                onClick={handleButtonClick}
            >
                {isClicked ? 'Clicked!' : 'Click Me'}
            </button>
        </div>
    );
};

export default NameForm;
