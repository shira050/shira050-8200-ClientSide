import produce from 'immer';
import { getAllUsersFromserver } from './UserThank';
const UsersInitialState={
   
    user:{memberID:"",memberAdress:"",memberName:"אורח",memberLastName:"",memberCity:"",memberBirthDate:null,memberTel:"",memberPhone:""},
    users:[] ,
    menneger_pass:'',
    isMenneger:0,
   
}


export const UsersReducer=produce((state,action)=>{
    let i;
    switch(action.type)
    {
        case "LOAD_USER":state.user=action.payload;break;
        case "LOAD_USERS":state.users.push(action.payload);break;
        case "ADD_USER":state.users.push(action.payload);break;
        case "UPPDATE_USER":state.users.push(action.payload);break;
        case "REMOVE_USER":state.users.push(action.payload);break;
        case "IS_MENNEGER":state.isMenneger=action.payload;break;
   
   
       
    }
},UsersInitialState)