import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { ACTUALIZAR_PHOTOS } from "..";
import { IAction } from "../../../models/IAction";
import IPhotos from "../../../models/IPhotos";
import { IState } from "../../../models/IState";

export const actualizarPhotos = (payload: IPhotos[]): IAction => ({
    type: ACTUALIZAR_PHOTOS,
    payload
})

export const fetchPhotos = () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
        const pothosResponse = await axios.get(
            'https://jsonplaceholder.typicode.com/photos',
        
       )

        dispatch(actualizarPhotos(pothosResponse.data))
    }catch (error) {
        console.error(error)
  
     }
}