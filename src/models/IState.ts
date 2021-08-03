import { IAlbumState } from "../store/reducers/Album";
import { IPhotosReducerState } from "../store/reducers/Photos";
import { IPruebaReducerState } from "../store/reducers/Prueba";
import IPhotos from "./IPhotos";

export interface IState {
    Album: IAlbumState
    Prueba: IPruebaReducerState
    Photos: IPhotosReducerState
}