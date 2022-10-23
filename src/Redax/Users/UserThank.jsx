import axios from "axios"
import { useDispatch } from "react-redux";
import {loadUsers,loadOneUser,addUser,uppdateUser,removeUser} from './UserAction';
import { useSelector } from "react-redux";
import { updatePictureInBasket } from "./UserAction";
export const userURL="https://localhost:44337";
//    const Basket=useSelector((s)=>{return s.users.basket});

export const getAllUsersFromserver = async (dispatch) => {
    
    const usersPromise = axios.get(userURL+"/GetAllMembers");
    const response = await usersPromise;
    const users = response.data;
   await dispatch(loadUsers(users));
    return users;

}


export const getUserByID = async (dispatch, id) => {
     const userPromise = axios.get(userURL+"/GetMember?id="+id);
    const response = await userPromise;
    const user = response.data;
  if(user)
    await dispatch(loadOneUser(user));
    return user;
}
export const getUserDetails = async (dispatch, id) => {
    const userPromise = axios.get(userURL+"/GetMemberDetails?id="+id);
   const response = await userPromise;
   const user = response.data;
   return user;
}

export const AddUser = async(dispatch, memberName,memberLastName, memberID, memberAdress, memberCity, memberTel, memberPhone)=>
 {
      const newU={ memberName: memberName,memberLastName:memberLastName, memberID:memberID,memberAdress:memberAdress,memberCity:memberCity,memberTel:memberTel,memberPhone:memberPhone};
     const userPromise = axios.post(userURL+"/AddMember",newU);
     const response = await userPromise;
     const user = response.data;
    await dispatch(addUser(user));
    await dispatch(loadOneUser(user));
     return user;
}

export const UppdateUser = async(dispatch, memberName,memberLastName, memberID, memberAdress, memberCity, memberTel, memberPhone)=>
{           
    const uppU={ memberName: memberName,memberLastName:memberLastName, memberID:memberID,memberAdress:memberAdress,memberCity:memberCity,memberTel:memberTel,memberPhone:memberPhone};
    const userPromise = axios.put(userURL+"/UppdateMember/"+memberID,uppU);
     const response = await userPromise;
     const user = response.data;
    await dispatch(uppdateUser(user));
     return user;
}
export const UppdateMemberKoronaDetails = async( memberID, Vaccination1Date, Vaccination2Date, Vaccination3Date, Vaccination4Date, Vaccination1manufacturer, Vaccination2manufacturer,Vaccination3manufacturer,Vaccination4manufacturer,memberSickDate,memberRecoveryDate)=>
{      
    debugger   
    // if(Vaccination1Date==null)
    // vaccination1Date= new Date(Vaccination1Date);
    // if(Vaccination2Date==null)
    // vaccination2Date= new Date(Vaccination2Date);
    // if(Vaccination3Date==null)
    // vaccination3Date= new Date(Vaccination3Date);
    // if(Vaccination4Date==null)
    // vaccination4Date= new Date(Vaccination4Date);

    const neuppUwD={
          memberID:memberID,
          vaccination1Date:new Date(Vaccination1Date),
           vaccination2Date:new Date(Vaccination2Date),
            vaccination3Date:new Date(Vaccination3Date),
             vaccination4Date:new Date(Vaccination4Date),
              vaccination1manufacturer:String(Vaccination1manufacturer),
               vaccination2manufacturer:String(Vaccination2manufacturer),
               vaccination3manufacturer:String(Vaccination3manufacturer),
               vaccination4manufacturer:String(Vaccination4manufacturer),
               memberSickDate:new Date(memberSickDate),
               memberRecoveryDate:new Date(memberRecoveryDate)};
    const userPromise = axios.put(userURL+"/UppdateMemberKoronaDetails/"+memberID,neuppUwD);
     const response = await userPromise;
     const userKoronaDetails = response.data;
     
     return userKoronaDetails;
}
export const RemoveUser = async(dispatch,code)=>
{  
 const userPromise = axios.delete(userURL+"/RemoveMember/"+code);
const response = await userPromise;
const user = response.data;
await dispatch(removeUser(user));
return user;
}




// export const ReadMenegerPassword = async(dispatch)=>
//  {
//      const passPromise = axios.get(userURL+"/ReadMenegerPassword");
//     const response = await passPromise;
//     const pass = response.data;
//     return pass;
// }

export const GetAllMembersDoV1 = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/GetAllMembersDoV1");
    const response = await usersPromise;
    const users = response.data;
    return users;

}
export const GetAllMembersDoV2 = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/GetAllMembersDoV2");
    const response = await usersPromise;
    const users = response.data;
    return users;

}
export const GetAllMembersDoV3 = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/GetAllMembersDoV3");
    const response = await usersPromise;
    const users = response.data;
    return users;

}
export const GetAllMembersDoV4 = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/GetAllMembersDoV4");
    const response = await usersPromise;
    const users = response.data;
    return users;

}


//גרף:
export const getAllSickUsersInOneMonth = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/AveragePos");
    const response = await usersPromise;
    const users = response.data;
    return users;

}
export const getUnV = async (dispatch) => {
  
    const usersPromise = axios.get("https://localhost:44337/GetCountNotV/");
    const response = await usersPromise;
    const users = response.data;
    return users;

}