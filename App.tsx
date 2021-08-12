

 import React from 'react';
 import {SafeAreaView} from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
 import * as reducers from './src/store/reducers'
 import HomeScreen from './src/components/screens/HomeScreen';
 import thunk from 'redux-thunk';
import { AlbumProvider } from './src/components/context/Album-Context';
import { PhotoProvider } from './src/components/context/Photo-Context';
import AlbumList from './src/components/organisms/AlbumList';
import Routes from './src/routes/Routes';
import MyButtomTab from './src/navigator/MyButtomTab';
import { NavigationContainer } from '@react-navigation/native';

 const store = createStore(combineReducers(reducers), applyMiddleware(compose(thunk)));

 const App = () => {
  return (
    <Provider  store={store}>
      <AlbumProvider>
        <PhotoProvider>
            <NavigationContainer>
             <MyButtomTab/>
            </NavigationContainer>  
          </PhotoProvider>
        </AlbumProvider>
      </Provider>  
      
  );
};

export default App;
