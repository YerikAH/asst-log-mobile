import {Dashboard, Notification, Profile, Spaces} from '@/pages';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ArchiveBoxIcon,
  UserIcon,
  BellIcon,
} from 'react-native-heroicons/solid';
import {
  HomeIcon as HomeIconInactive,
  ArchiveBoxIcon as ArchiveBoxIconInactive,
  UserIcon as UserIconInactive,
  BellIcon as BellIconInactive,
} from 'react-native-heroicons/outline';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import SpaceNavigator from '../SpaceNavigator';
import {RoutesTabs} from '../routes';

const Tab = createBottomTabNavigator();

type TabParamList = {
  Dashboard: undefined;
  StackSpace: undefined;
  Profile: undefined;
  Notification: undefined;
};

const Tabs = [
  {
    name: RoutesTabs.Dashboard,
    component: Dashboard,
    iconActive: HomeIcon,
    iconInactive: HomeIconInactive,
    label: 'Dashboard',
  },
  {
    name: RoutesTabs.SpaceNavigator,
    component: SpaceNavigator,
    iconActive: ArchiveBoxIcon,
    iconInactive: ArchiveBoxIconInactive,
    label: 'Asistencias',
  },
  {
    name: RoutesTabs.Notification,
    component: Notification,
    iconActive: BellIcon,
    iconInactive: BellIconInactive,
    label: 'Notificaciones',
  },
  {
    name: RoutesTabs.Profile,
    component: Profile,
    iconActive: UserIcon,
    iconInactive: UserIconInactive,
    label: 'Perfil',
  },
];

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: '#f8fafc',
    borderWidth: 0,
    borderColor: '#f8fafc',
    elevation: 0,
    height: 80,
  },
};
const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
export default function TabNavigator() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const state = e.data.state;
      if (state) {
        const currentRoute = state.routes[state.index];

        if (currentRoute.name === 'Tabs' && currentRoute.state) {
          const tabState = currentRoute.state;
          setTabActive(tabState.index || 0);
        }
      }
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        ...screenOptions,
        tabBarItemStyle: {
          paddingVertical: 18,
        },
      }}>
      {Tabs.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          name={tab.name}
          component={tab.component}
          options={{
            ...tabOptions,
            tabBarLabel: `${tab.label}`,
            tabBarIcon: ({size}) => {
              return tabActive === idx ? (
                <tab.iconActive color="#2563eb" size={size} />
              ) : (
                <tab.iconInactive color="#6b7280" size={size} />
              );
            },
            tabBarLabelStyle: {
              color: tabActive === idx ? '#2563eb' : '#6b7280',
              fontSize: 12,
              letterSpacing: -0.4,
              fontFamily:
                tabActive === idx ? 'Lexend-SemiBold' : 'Lexend-Regular',
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
