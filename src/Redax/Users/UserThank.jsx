import axios from "axios"
import { useDispatch } from "react-redux";
import {loadUsers,loadOneUser,addUser,uppdateUser,removeUser} from './UserAction';
import { useSelector } from "react-redux";
import { updatePictureInBasket } from "./UserAction";
export const userURL="http://localhost:26064/api/UserControler";
//    const Basket=useSelector((s)=>{return s.users.basket});

export const getAllUsersFromserver = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/GetAllUsers");
    const response = await usersPromise;
    const users = response.data;
   await dispatch(loadUsers(users));
    return users;

}


export const getUserFromserverBynameAndPass = async (dispatch, name,pass) => {
     const userPromise = axios.get(userURL+"?name="+name+"&password="+pass);
    const response = await userPromise;
    const user = response.data;
  if(user)
    await dispatch(loadOneUser(user));
    return user;
}
export const AddUser = async(dispatch,NameUser,lastNameuser, PasswordUser,EmailUser)=>
 {debugger
      const newU={ codeUser: 0,userName: NameUser,userLastName:lastNameuser, userPassword:PasswordUser,userMail:EmailUser};
     const userPromise = axios.post(userURL,newU);
     const response = await userPromise;
     const user = response.data;
    await dispatch(addUser(user));
    await dispatch(loadOneUser(user));
     return user;
}

export const UppdateUser = async(dispatch,code,NameUser,LastName,PasswordUser,EmailUser)=>
{           
      const uppU={ codeUser: code,userName: NameUser,userLastName:LastName,userPassword:PasswordUser,userMail:EmailUser};
     const userPromise = axios.put(userURL+"/UppdateUser/"+code,uppU);
     const response = await userPromise;
     const user = response.data;
    await dispatch(uppdateUser(user));
     return user;
}
export const RemoveUser = async(dispatch,code)=>
{   const userPromise = axios.delete(userURL+"/RemoveUser/"+code);
const response = await userPromise;
const user = response.data;
await dispatch(removeUser(user));
return user;
}



// סל קניות

export const updatePictureB =async(dispatch,uppP,count,Basket)=>     
{   
     debugger
 //  const Basket=useSelector((s)=>{return s.users.basket});

//      for(i=0;i<Basket.length;i++)
//      if(Basket[i].codePicture==uppP.codePicture)
// break;

// // Basket[i].codePicture=uppP.codePicture,
// // Basket[i].namePicture=uppP.namePicture,
 uppP.count=count;
// // Basket[i].price=uppP.price,
// Basket[i].finalPrice=uppP.price*uppP.count
      
 await dispatch(updatePictureInBasket(uppP));
return Basket;
}



export const ReadMenegerPassword = async(dispatch)=>
 {
     const passPromise = axios.get(userURL+"/ReadMenegerPassword");
    const response = await passPromise;
    const pass = response.data;
    return pass;
}