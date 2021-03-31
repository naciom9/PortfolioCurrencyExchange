import { combineReducers, createStore } from 'redux';
import { history } from './history';
import { users } from './users';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';

// const config = {
//     key: 'root',
//     storage,
//     debug: true
// }

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            history,
            users
        })
    );

    // const persistor = persistStore(store);

    // return { persistor, store };
    return { store };
};