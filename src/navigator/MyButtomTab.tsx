import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AlbumList from '../components/organisms/AlbumList';
import AlbumDetails from '../components/molecules/AlbumDetails';

const MyButtomTab = () => {
    const {Navigator, Screen} = createBottomTabNavigator();
    return (
        <Navigator>
            <Screen name="Lista de Albunes" component={AlbumList}/>
            <Screen name="Detalle del Albun" component={AlbumDetails}/>            
        </Navigator>
    )
}

export default MyButtomTab
