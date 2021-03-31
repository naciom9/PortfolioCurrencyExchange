import * as ActionTypes from './ActionTypes';
import { baseUrl } from './shared/baseUrl';

export const fetchAddUsers = () => dispatch => {
    return fetch(baseUrl + 'users')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(users => dispatch(addUser(users)))
        .catch(error => dispatch(failedUsers(error.message)));
};

export const addUsers = users => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});

export const failedUsers = errMess => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});

export const fetchUserHistory = () => dispatch => {
    return fetch(baseUrl + 'history')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(users => dispatch(addHistory(users)))
        .catch(error => dispatch(failedHistory(error.message)));
};

export const addHistory = history => ({
    type: ActionTypes.ADD_HISTORY,
    payload: history
});

export const failedHistory = errMess => ({
    type: ActionTypes.FAILED_HISTORY,
    payload: errMess
});


// export const fetchPageDecoration = () => dispatch => {
//     return fetch(baseUrl + 'users')
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
//         .then(page => dispatch(pageDecoration(page)))
//         .catch(error => dispatch(failedPageDecoration(error.message)));
// };

// export const pageDecoration = () => ({
//     type: ActionTypes.ADD_DECORATIONS
// });

// export const failedPageDecoration = () => ({
//     type: ActionTypes.ADD_DECORATIONS
// });


