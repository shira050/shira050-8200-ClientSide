import { combineReducers, createStore } from "redux";
import { UsersReducer } from "./Users/UserReducer";



const Reducers = combineReducers(
    {
        users: UsersReducer,
       
    }
)

//בניית הסטור- המחסן הגלובאלי- שיכיר את כל הנתונים
export const store = createStore(Reducers);

//לצורך בדיקה בלבד- בדפדפן
window.store = store;