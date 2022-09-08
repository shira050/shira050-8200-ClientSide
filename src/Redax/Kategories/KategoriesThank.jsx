import axios from "axios"
import { useDispatch } from "react-redux";
import {loadKategory,loadKategories,addKategory,uppdateKategory,removeKategory} from './KategoriesAction';


export const kategoriesURL="http://localhost:26064/api/KategoryControler";
// const code="4";

export const getAllKategoriesFromserver = async (dispatch) => {
    const kategoriesPromise = axios.get(kategoriesURL+"/GetAllkategories");
    const response = await kategoriesPromise;
    const kategories = response.data;
    dispatch(loadKategories(kategories));
    return kategories;
}

export const getKategoryByCode = async (dispatch,code) => {
    debugger
    const KategoryPromise = axios.get(kategoriesURL+"?code="+code);
    const response = await KategoryPromise;
    const Kategory = response.data;
     dispatch(loadKategory(Kategory));
    return Kategory;

}

export const AddKategory = async(dispatch,nameKategory,picKategory)=>
{   
    const newK = { CodeKategory: 0, NameKategory: nameKategory,PicKategoryRoute:picKategory } 
    const kategoriesPromise = axios.post(kategoriesURL,newK);
    const response = await kategoriesPromise;
    const Kategory = response.data;
     dispatch(addKategory(Kategory));
    return Kategory;
}

export const UppdateKategory = async(dispatch,idKategory,nameKategory)=>
{     
    const uppC = { CodeKategory: 0, NameKategory: nameKategory } 
      const kategoriesPromise = axios.put(kategoriesURL+"/UppdateKategory/"+idKategory,uppC);
    const response = await kategoriesPromise;
    const Kategory = response.data;
     dispatch(uppdateKategory(Kategory));
    return Kategory;
}
export const RemoveKategory = async(dispatch,code)=>
{   const kategoriesPromise = axios.delete(kategoriesURL+"/RemoveKategory/"+code);
const response = await kategoriesPromise;
    const Kategory = response.data;
    dispatch(removeKategory(Kategory));
    return Kategory;
}



