import { IAction } from "../../../models/IAction"
import IAlbum from "../../../models/IAlbum"
import { ACTUALIZAR_ALBUM, ACTUALIZAR_SELECTED_ALBUM } from "../../actions"

export interface IAlbumState {
    album: IAlbum[]
    selectedAlbum: number | null
}

const initialState: IAlbumState = {
    album: [],
    selectedAlbum: null
}

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_ALBUM:
        return {...state, album:payload}

        case ACTUALIZAR_SELECTED_ALBUM:
            return {...state, selectedAlbum: payload}

    default:
        return state
    }
}
