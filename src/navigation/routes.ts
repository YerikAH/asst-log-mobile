export enum Routes {
  Register = 'Register',
  Login = 'Login',
  Home = 'Home',
  Tabs = 'Tabs',
}
export enum RoutesSpace {
  Spaces = 'Spaces',
  Space = 'Space',
  JoinSpace = 'JoinSpace',
  SuccessSpace = 'SuccessSpace',
}

export enum RoutesTabs {
  Dashboard = 'Dashboard',
  SpaceNavigator = 'SpaceNavigator',
  Profile = 'Profile',
  Notification = 'Notification',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Register]: undefined;
  [Routes.Login]: undefined;
  [Routes.Tabs]: undefined;
};
