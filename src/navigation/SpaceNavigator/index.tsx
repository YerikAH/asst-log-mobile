import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesSpace} from '@/navigation/routes.ts';
import {JoinSpace, Space, Spaces} from '@/pages';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function SpaceNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={RoutesSpace.Spaces}>
      <Stack.Screen name={RoutesSpace.Spaces} component={Spaces} />
      <Stack.Screen name={RoutesSpace.JoinSpace} component={JoinSpace} />
      <Stack.Screen name={RoutesSpace.Space} component={Space} />
    </Stack.Navigator>
  );
}
