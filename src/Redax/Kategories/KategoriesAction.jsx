
export function loadKategory(Kategory) {
    return { type: "LOAD_Kategory",paylod:Kategory }
}
export function loadKategories(Categories) {
   
    return { type: "LOAD_KATEGORIES",paylod:Categories }
}
export function addKategory(Kategory) {
    return { type: "ADD_Kategory",paylod:Kategory }
}
export function uppdateKategory(Kategory) {
    return { type: "UPPDATE_Kategory",paylod:Kategory }
}

export function removeKategory(Kategory) {
    return { type: "REMOVE_Kategory",paylod:Kategory }
}


