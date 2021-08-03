import styled from '@emotion/native'
import React from 'react'
import { Text,Button, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import IAlbum from '../../../models/IAlbum'
import { IState } from '../../../models/IState'
import IPhotos from '../../../models/IPhotos'
import PhotoListItem from '../../molecules/PhotoListItem'
import { actualizarSelectedAlbum } from '../../../store/actions/Album'
import { fetchPhotos } from '../../../store/actions/Photos'
import { useEffect } from 'react'
import { Image } from 'react-native'
import { Photos } from '../../../store/reducers'


const AlbumDetails: React.FC = ()  => {
    const dispatch = useDispatch();

  const selectedAlbum = useSelector((state: IState) => state.Album.selectedAlbum);
  const album = useSelector((state: IState) => state.Album.album);
  const {id, title} = album[selectedAlbum || 0];
  const photos = useSelector((state: IState) => state.Photos.photos);
  const filterPhotos = photos.filter(photo => photo.albumId === id)

    const onBackPress = () => {
        dispatch(actualizarSelectedAlbum(null))
    };

    useEffect(() => {
        dispatch(fetchPhotos());
      }, []);

    return (
    
        <Container>
             <CustomText>Titulo Album:</CustomText>
             <Text>{title}</Text>
             <CustomText>Detalle Album:</CustomText>
            
             {filterPhotos.length > 0 && (
                <AlbList data={filterPhotos} renderItem={({item}) =>
                <Text>
            {item.id}-{item.title} {"\n"}
            <Image style={styles.image} source={{uri: item.thumbnailUrl}}/></Text> } />
                )}
          
      

            <Button title="Regresar" onPress={onBackPress}/>
        </Container>
    )
}

const Container = styled.View`
    padding: 12px;
    height: 100%;
`

const AlbList = styled.FlatList`
    padding: 2px
`

const CustomText = styled.Text`
    font-size: 18px
`
const styles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
    },
});   
export default AlbumDetails


