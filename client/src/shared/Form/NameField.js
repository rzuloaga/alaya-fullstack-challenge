import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const NameField = ({ label, key }) => {
    const [state, setState] = useState({});

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };

    return (
        <TextField
            variant="filled"
            label={label || 'Name'}
            name={key || 'name'}
            onChange={handleChange}
        />
    );
};

export default NameField;
