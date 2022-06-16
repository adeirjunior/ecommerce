import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StateContext } from './context';
import Homescreen from './screens/Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StateContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={Homescreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </StateContext>
  );
}
