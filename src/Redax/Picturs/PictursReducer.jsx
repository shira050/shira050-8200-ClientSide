
import produce from 'immer';

const PICTUREsInitialState={
    picture:{},
    pictures:[],
    picturesInOneKategory:[],
    picturesOfOneUser:[]
    

}


export const PicturesReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "LOAD_PICTURE":state.picture=action.payload;break;
        case "LOAD_PICTURES":state.pictures.push(action.payload);break;
        case "ADD_PICTURES":state.pictures.push(action.payload);break;
        case "UPPDATE_PICTURES":state.pictures.push(action.payload);break;
        case "REMOVE_PICTURES":state.pictures.push(action.payload);break;
        case "GET_BY_KATEGORY_PICTURES":state.picturesInOneKategory.push(action.payload);break;
        case "GET_BY_ONE_USER_Pictures":state.picturesOfOneUser.push(action.payload);break;

     
    }
},PICTUREsInitialState)