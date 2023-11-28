import { configureStore,combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";

const rootreducer=combineReducers({todo:Reducer});
const Store=configureStore({reducer:rootreducer,middleware:[thunk,logger]})
export default Store;