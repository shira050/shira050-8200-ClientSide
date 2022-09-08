
export function loadPictures(Pictures) {
    return { type: "LOAD_Pictures",payload:Pictures }
}
export function loadPicture(Picture) {
    return { type: "LOAD_Picture",payload:Picture }
}
export function addPicture(Pictures) {
    return { type: "ADD_Pictures",payload:Pictures }
}
export function uppdatePicture(Pictures) {
    return { type: "UPPDATE_Pictures",payload:Pictures }
}

export function removePicture(Pictures) {
    return { type: "REMOVE_Pictures",payload:Pictures }
}
export function getAllPicturesInKategory(Pictures) {
    return { type: "GET_BY_KATEGORY_Pictures",payload:Pictures }
}
export function getAllPicturesOfOneUser(Pictures) {
    return { type: "GET_BY_ONE_USER_Pictures",payload:Pictures }
}
