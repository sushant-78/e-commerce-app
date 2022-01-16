import { createStore, applyMiddleware, compose } from "redux";
import reduxReset from "redux-reset";
import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./cartRedux"; // Root reducer

const persistConfig = {
    // configuration object for redux-persist
    key: "root",
    storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const enHanceCreateStore = compose(
    applyMiddleware(),
    reduxReset() // Will use 'RESET' as default action.type to trigger reset
)(createStore);

const store = enHanceCreateStore(persistedReducer);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
