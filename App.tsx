import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './src/screens/MapScreen';
import {Provider} from 'react-redux';
import RiderScreen from './src/screens/RideScreen';
import {Route} from './src/constants/Route';
import { store } from './src/redux/store';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Route.MAP_SCREEN} component={MapScreen} />
          <Stack.Screen
            name={Route.RIDE_SCREEN}
            component={RiderScreen}
            options={{headerShown: true, headerBackTitle: 'Back'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
