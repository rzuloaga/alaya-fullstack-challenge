import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// Import Style

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const LogInForm = () => {
    const [state, setState] = useState({});
    const classes = useStyles();

    const submit = () => {
        if (state.name && state.title && state.content) {
            addPost(state);
        }
    };

    return (
        <div className={`d-flex flex-column my-4 w-100`}>
            <h3>Identify yourself</h3>
            <Button
                className="mt-4"
                variant="contained"
                color="primary"
                onClick={() => submit()}
            >
                Log In
            </Button>
            <Button
                className="mt-4"
                variant="contained"
                color="primary"
                onClick={() => submit()}
            >
                Sign Up
            </Button>
        </div>
    );
};

export default LogInForm;
