
import produce from 'immer';

const CategoriesInitialState={
    kategory:{},
    kategories:[]
 
}

export const KategoryReducer=produce((state,action)=>{ 
    switch(action.type)
    {    
         case "LOAD_KATEGORY":state.kategory=action.payload;break;
        case "LOAD_KATEGORIES":state.kategories.push(action.payload);break;
        case "ADD_KATEGORY":state.kategories.push(action.payload);break;
        case "UPPDATE_KATEGORY":state.kategories.push(action.payload);break;
        case "REMOVE_KATEGORY":state.kategories.push(action.payload);break;
      break;
    }
},CategoriesInitialState)
