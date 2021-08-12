import styled from '@emotion/native'
import React from 'react'
import { Text,Button, StyleSheet} from 'react-native'
import { useEffect } from 'react'
import { Image } from 'react-native'
import { useAlbum } from '../../context/Album-Context'
import { usePhoto } from '../../context/Photo-Context'
import { useHistory } from 'react-router-native'


const AlbumDetails: React.FC = ()  => {
  const history = useHistory()  
  const {album, setSelectedAlbum, selectedAlbum} = useAlbum();
  const {id, title} = album[selectedAlbum || 0];
  const {photo, fetchPhoto} = usePhoto();
  const filterPhotos = photo.filter(photo => photo.albumId === id)


    const onBackPress = () => {
        setSelectedAlbum(null)
        history.goBack();
    };


      useEffect(() => {
        fetchPhoto()
      }, [])
        
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


