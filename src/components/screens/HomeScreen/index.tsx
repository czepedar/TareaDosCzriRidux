import React from 'react';
import { Text } from 'react-native';
import {View} from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
    const selectedAlbum = useSelector((state: IState) => state.Album.selectedAlbum )
  return (
    <View>{selectedAlbum ? <AlbumDetails/> : <AlbumList/>}</View>
  );
};

 //{selectedAlbum ? <Text>Album</Text> : <AlbumList/>}

export default HomeScreen;