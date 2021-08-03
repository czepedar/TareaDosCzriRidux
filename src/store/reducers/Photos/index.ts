import { IAction } from "../../../models/IAction"
import IPhotos from "../../../models/IPhotos"
import { ACTUALIZAR_PHOTOS } from "../../actions"

export interface IPhotosReducerState{
    photos: IPhotos[]
}

const initialState = {
    photos:[],
}

export default (
    state = initialState, 
    { type, payload}: IAction
    ): IPhotosReducerState => {
    switch (type) {
        case ACTUALIZAR_PHOTOS:
            return {...state, photos: payload as IPhotos[]}
    default:
        return state
    }
}

