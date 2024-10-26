import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import WelcomeScreen from '../screens/WelcomeScreen';
// import BasicInfoScreen from '../screens/BasicInfoScreen';
// import PhotosScreen from '../screens/PhotosScreen';
// import HoursScreen from '../screens/HoursScreen';
// import MenuScreen from '../screens/MenuScreen';
// import ConfirmationScreen from '../screens/ConfirmationScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
        <Stack.Screen name="Hours" component={HoursScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;