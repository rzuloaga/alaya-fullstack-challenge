import { ADD_POST, ADD_POSTS, DELETE_POST } from './AuthActions';

// Initial State
const initialState = { data: [] };

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

/* Selectors */

// Get authenticated user
export const getAuthUser = (state) => state.auth.user;

// Export Reducer
export default AuthReducer;
