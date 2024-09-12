import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, Routes} from '@/navigation/routes.ts';
import {Home, Login, Register} from '@/pages';
import BootSplash from 'react-native-bootsplash';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Register} component={Register} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Tabs} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
