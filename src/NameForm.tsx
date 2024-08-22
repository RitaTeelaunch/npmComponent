import React, { useState } from 'react';

const NameForm: React.FC  = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div style={{ margin: '20px' }}>
    <div>
        <input
            type="text"
    placeholder="First Name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    style={{ marginRight: '10px', padding: '5px' }}
    />
    <input
    type="text"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    style={{ padding: '5px' }}
    />
    </div>
    <button
    style={{
        marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: isClicked ? 'green' : 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
    }}
    onClick={handleButtonClick}
        >
        {isClicked ? 'Clicked!' : 'Click Me'}
        </button>
        </div>
);
};

export default NameForm;
