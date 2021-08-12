import React from 'react';
import {View} from 'react-native';
import { useAlbum } from '../../context/Album-Context';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
    const {selectedAlbum} = useAlbum()
  return (
    <View>{selectedAlbum ? <AlbumDetails/> : <AlbumList/>}</View>
  );
};

 

export default HomeScreen;