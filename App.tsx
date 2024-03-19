import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './src/screens/MapScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;