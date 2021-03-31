import * as ActionTypes from './ActionTypes';

export const history = (state = { history: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HISTORY:
            state.history.push(action.payload);
            return { ...state };

        default:
            return state;
    }
}