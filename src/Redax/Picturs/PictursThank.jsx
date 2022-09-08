import axios from "axios"
import { useDispatch } from "react-redux";
import { loadPictures, loadPicture, addPicture, uppdatePicture, removePicture, getAllPicturesInKategory } from "./PictursAction";
import { getAllPicturesOfOneUser } from "./PictursAction";


export const PicturesURL = "http://localhost:26064/api/PictureControler";



export const getAllPicturesFromserver = async (dispatch) => {
    const PicturesPromise = axios.get(PicturesURL + "/GetAllPictures");
    const response = await PicturesPromise;
    const Pictures = response.data;
    dispatch(loadPictures(Pictures));
    return Pictures;

}

export const getPictureByCode = async (dispatch, code) => {
    const PicturePromise = axios.get(PicturesURL + "?code=" + code);
    const response = await PicturePromise;
    const Picture = response.data;
    dispatch(loadPicture(Picture));

    return Picture;

}
export const AddPicture = async (dispatch, codeUser, codeKategory, cascadingPicture, routeSoursePicture, routeGoalPicture,count) => {
    debugger
   
    const newP = {
        "codePicture": 0,
        "codeUser": Number(codeUser),
        "codeKategory": Number(codeKategory),
        "uppDateToWeb": "2022-01-27T14:59:27.039Z",
        "cascadingPicture": Number(cascadingPicture),
        "routeSoursePicture": routeSoursePicture,
        "routeGoalPicture": routeGoalPicture,
        "codeCounting":Number(count),
        
    };
    const PicturePromise = axios.post(PicturesURL, newP);
    debugger
     const response = await PicturePromise;
    const Picture = response.data;
    dispatch(addPicture(Picture));
    return Picture;
}

export const UppdatePicture = async (dispatch,codePicture, codeUser, codeKategory, uppDateToWeb, cascadingPicture, routeSoursePicture, routeGoalPicture,codeCounting) => {
    const uppP = { codePicture: 0, codeUser: codeUser, codeKategory: codeKategory, uppDateToWeb: null, cascadingPicture: cascadingPicture, routeSoursePicture: routeSoursePicture, routeGoalPicture: routeGoalPicture ,codeCounting:codeCounting};
    const PicturePromise = axios.put(PicturesURL + "/UppdatePicture/" + codePicture, uppP);
    const response = await PicturePromise;
    const Picture = response.data;
    dispatch(uppdatePicture(Picture));
    return Picture;
}
export const RemovePicture = async (dispatch, code) => {
    const PicturePromise = axios.delete(PicturesURL + "/RemovePicture/" + code);
    const response = await PicturePromise;
    const Picture = response.data;
    dispatch(removePicture(Picture));
    return Picture;
}

export const GetAllPicturesInKategory = async (dispatch, codeCategory) => {
    const PicturePromise = axios.get(PicturesURL + "/GetAllPicturesInCategory/" + codeCategory);
    const response = await PicturePromise;
    const Picture = response.data;
    dispatch(getAllPicturesInKategory(Picture));
    return Picture;
}
export const GetAllPicturesOfOneUser = async (dispatch, codeUser) => {
    const PicturePromise = axios.get(PicturesURL + "/GetAllPicturesOfOneUser/" + codeUser);
    const response = await PicturePromise;
    const Picture = response.data;
    dispatch(getAllPicturesOfOneUser(Picture));
    return Picture;
}
export const getAllCountingFromserver = async (dispatch) => {
    const PicturePromise = axios.get(PicturesURL + "/GetAllCountings" );
    const response = await PicturePromise;
    const Picture = response.data;
    // dispatch(getAllCountingFromserver(Picture));
    return Picture;
}

