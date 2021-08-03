import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import { useDispatch } from 'react-redux';
import IAlbum from '../../../models/IAlbum';
import { actualizarSelectedAlbum } from '../../../store/actions/Album';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
 
}

const AlbumListItem: FC<AlbumListItemProps> = ({album, index}) => {
    const dispatch = useDispatch()

  const onPress = () => {
    dispatch(actualizarSelectedAlbum(index))
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}- {album.title}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #00aae4;
  border-radius: 09px;
  padding: 8px 12px;
  margin: 1px 0;
`;

export default AlbumListItem;
