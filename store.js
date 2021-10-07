import {combineReducers,applyMiddleware,createStore,compose} from 'redux'

import thunk from 'redux-thunk'
import { SigunupUser } from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';





const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const reducer = combineReducers({

    SigunupUser:SigunupUser
})

const intialState ={


}





const store = createStore(

    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
    
    
   

)

export default store;