import { createStore,combineReducers,applyMiddleware} from 'redux';
import { cartReducer } from './reducers/Cartreducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzareducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer} from './reducers/Pizzareducer';
import { registerUserReducer,loginUserReducer,getAllUsersReducer } from './reducers/Userreducer';
import {placeOrderReducer,getUserOrderReducer,allUserOrdersReducer} from './reducers/Orderreducer'
const rootReducer = combineReducers({
    getAllPizzareducer:getAllPizzareducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaByIdReducer:updatePizzaByIdReducer,
    allUserOrdersReducer:allUserOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
});
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState ={
    cartReducer:{
        cartItems: cartItems,
    },
    loginUserReducer:{
        currentUser:currentUser,
    },
};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;