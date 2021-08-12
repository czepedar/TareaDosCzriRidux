import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import IAlbum from '../../models/IAlbum'
import { Album } from '../../store/reducers'

interface AlbumContextPrps{
    album: IAlbum[];
    setAlbum:(album: IAlbum[]) => void
    selectedAlbum: number | null
    setSelectedAlbum: (album: number | null) => void
    fetchAlbum: () => Promise<void>
}

const AlbumContext = createContext<AlbumContextPrps>({
    album: [],
    setAlbum:() => {},
    selectedAlbum: null,
    setSelectedAlbum: () => {},
    fetchAlbum: () => Promise.resolve(),

})

export const AlbumProvider: React.FC = ({children}) => {
    const [album,setAlbum] = useState<IAlbum[]>([])
    const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null)

    const fetchAlbum =  async () => {

        try {
            const albunes = await axios.get(
                'https://jsonplaceholder.typicode.com/albums'
             )

             setAlbum(albunes.data)
            }catch(error) {
             console.error(error)
        }
    }


    const val ={album, setAlbum, selectedAlbum, setSelectedAlbum,fetchAlbum}
    return (
        <AlbumContext.Provider value={val}>{children}</AlbumContext.Provider>          
    )
}


export const useAlbum = () => useContext(AlbumContext)

