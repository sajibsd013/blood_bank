import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './components/MainContainer'


export default function App() {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
}
