import * as ActionTypes from './ActionTypes';

export const users = (state = { users: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERS:
            return { ...state, login: action.payload };

        default:
            return state;
    }
}