import styled from '@emotion/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import IPhotos from '../../../models/IPhotos'
import { IState } from '../../../models/IState'
import { actualizarPhotos } from '../../../store/actions/Photos'
import { Album, Photos } from '../../../store/reducers'

export interface PhotoListItemProps {
    photoL: IPhotos;
   
}

const PhotoListItem: React.FC<PhotoListItemProps> = ({photoL}) => {
    //const dispatch = useDispatch();
    const photosL = useSelector((state: IState) => state.Photos.photos);
    const {albumId,id, title,  thumbnailUrl} = photoL
  
     //dispatch(actualizarPhotos(photoList));
    return (
        <Container>
            <Text>
            {albumId}{title}</Text> 
        </Container>
    )
} 

export default PhotoListItem

const Container  = styled.View`
    display: flex;
    flex-direction: row;
`
const CustomText = styled.Text`
  width: 85%;
`
const stylesImage = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
   
})