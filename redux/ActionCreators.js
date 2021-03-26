import * as ActionTypes from './ActionTypes';

export const fetchRates = () => dispatch => {

    return fetch("https://currency13.p.rapidapi.com/convert/10/USD/INR", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "68be52b1b6mshc14b09eed881d8fp1c1f9ajsn952306a98f81",
            "x-rapidapi-host": "currency13.p.rapidapi.com"
        }
    })
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
        .then(rates => dispatch(addRates(rates)))
        .catch(error => dispatch(ratesFailed(error.message)));

}

export const addRates = () => ({
    type: ActionTypes.ADD_RATES,
    payload: rates
});

export const ratesFailed = errMess => ({
    type: ActionTypes.FAILED_RATE,
    payload: errMess
});


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

export const addUser = () => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});

export const failedUsers = () => ({
    type: ActionTypes.USERS_FAILED,
    payload: errMess
});

export const fetchPageDecoration = () => dispatch => {
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
        .then(page => dispatch(pageDecoration(page)))
        .catch(error => dispatch(failedPageDecoration(error.message)));
};

export const pageDecoration = () => ({
    type: ActionTypes.ADD_DECORATIONS
});

export const failedPageDecoration = () => ({
    type: ActionTypes.ADD_DECORATIONS
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

export const addHistory = errMess => ({
    type: ActionTypes.ADD_HISTORY,
    payload: history
});

export const failedHistory = errMess => ({
    type: ActionTypes.FAILED_HISTORY,
    payload: errMess
});
