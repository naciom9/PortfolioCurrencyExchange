import * as ActionTypes from './ActionTypes';

export const addUsers = users => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});

export const failedUsers = errMess => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});

// export const fetchUserHistory = () => dispatch => {
//     return fetch(baseUrl + 'history')
//         .then(response => {
//             if (response.ok) {
//                 return response;
//             } else {
//                 const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                 error.response = response;
//                 throw error;
//             }
//         },
//             error => {
//                 const errMess = new Error(error.message);
//                 throw errMess;
//             })
//         .then(response => response.json())
//         .then(users => dispatch(addHistory(users)))
//         .catch(error => dispatch(failedHistory(error.message)));
// };

export const addHistory = history => ({
    type: ActionTypes.ADD_HISTORY,
    payload: history
});

export const failedHistory = errMess => ({
    type: ActionTypes.FAILED_HISTORY,
    payload: errMess
});
