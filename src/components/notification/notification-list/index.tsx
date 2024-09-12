import {View} from 'react-native';
import {NotificationCard} from './notification-card';

export const NotificationList = () => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: '#fff',
        height: '100%',
        overflow: 'hidden',
        flex: 1,
        paddingVertical: 10,
      }}>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </View>
  );
};
