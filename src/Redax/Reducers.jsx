import { combineReducers, createStore } from "redux";
import { InviteReducer } from "./Invaites/InviteReducer";
import { UsersReducer } from "./Users/UserReducer";
import { PicturesReducer } from "./Picturs/PictursReducer";
import { KategoryReducer } from "./Kategories/KategoriesReducer";


const Reducers = combineReducers(
    {
        users: UsersReducer,
         invites: InviteReducer,
         picture: PicturesReducer,
         kategories:KategoryReducer
    }
)

//בניית הסטור- המחסן הגלובאלי- שיכיר את כל הנתונים
export const store = createStore(Reducers);

//לצורך בדיקה בלבד- בדפדפן
window.store = store;