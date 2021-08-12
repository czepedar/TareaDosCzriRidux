import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import IPhotos from '../../models/IPhotos'

interface PhotoContextPrps{
    photo: IPhotos[];
    setPhoto:(photo: IPhotos[]) => void
    fetchPhoto: () => Promise<void>
}

const PhotoContext = createContext<PhotoContextPrps>({
    photo: [],
    setPhoto:() => {},
    fetchPhoto: () => Promise.resolve(),

})

export const PhotoProvider: React.FC = ({children}) => {
    const [photo,setPhoto] = useState<IPhotos[]>([])
 
    const fetchPhoto =  async () => {

        try {
            const photos = await axios.get(
                'https://jsonplaceholder.typicode.com/photos'
             )

             setPhoto(photos.data)
            }catch(error) {
             console.error(error)
        }
    }


    const val ={photo, setPhoto,fetchPhoto}
    return (
        <PhotoContext.Provider value={val}>{children}</PhotoContext.Provider>          
    )
}

export const usePhoto = () => useContext(PhotoContext)