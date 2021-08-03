import IAlbum from "./IAlbum";
import IPhotos from "./IPhotos";

export interface IAction {
    type: string
    payload?: string | number | IPhotos[] | IAlbum[]
}

