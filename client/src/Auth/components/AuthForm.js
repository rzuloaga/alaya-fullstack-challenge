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

const AuthForm = () => {
    let showLogInForm = false;
    let showSignUpForm = false;

    const showForm = (type) => {
        if (type === 'logIn') {
            showLogInForm = true;
            showSignUpForm = false;
        }
        if (type === 'signUp') {
            showLogInForm = false;
            showSignUpForm = true;
        }

        showLogInForm = false;
        showSignUpForm = false;
    };

    return (
        <div className="d-flex flex-column my-4 w-100">
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

export default AuthForm;
