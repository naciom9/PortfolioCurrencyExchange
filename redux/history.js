import * as ActionTypes from './ActionTypes';

export const history = (state = { history: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HISTORY:
            return { ...state, login: action.payload };

        default:
            return state;
    }
}