import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import { actualizarAlbum, fetchAlbum } from '../../../store/actions/Album';
import { useAlbum } from '../../context/Album-Context';
import AlbumListItem from '../../molecules/AlbumListItem';


const AlbumList: React.FC = ({}) => {
    

    
    const {album, setAlbum, fetchAlbum} = useAlbum()

    useEffect(() => {
            fetchAlbum()
    }, [])

  return (
    <View>
      {album.length > 0 ? (
        <FlatList
          data={album}
          renderItem={({item, index}) => (
            <AlbumListItem
              key={item.id}
              album={item}
              index={index}

            />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
