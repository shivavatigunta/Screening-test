import {createStore, applyMiddleware, combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import thunk from "redux-thunk";
import champion from "./modules/world-champion/reducer";
import race from "./modules/season/reducer";

//Reducer Store
const rootReducer = combineReducers({
   champion,
   race,		
   routing: routerReducer
});

export default createStore(rootReducer,applyMiddleware(thunk));