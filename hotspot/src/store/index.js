import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer';
// import {persistReducer, persistStore} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'sitehotspots',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, usuarioReducer);

// const store = createStore(persistedReducer);
// const persistor = persistStore(store)

// export { store, persistor };
const store = createStore(usuarioReducer);
 export default store;