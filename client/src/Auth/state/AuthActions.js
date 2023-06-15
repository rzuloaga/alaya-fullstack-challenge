import callApi from '../../util/apiCaller';

// Export Constants
export const LOGIN = 'LOGIN';

// Export Actions
export function login(user) {
    return {
        type: LOGIN,
        user,
    };
}

export function loginRequest(user) {
    return (dispatch) => {
        return callApi('login', 'post', {
            user: {
                email: user.email,
                password: user.password,
            },
        }).then((res) => dispatch(login(res.user)));
    };
}
