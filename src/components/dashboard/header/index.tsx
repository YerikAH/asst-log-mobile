import {useAppNavigation} from '@/hooks';
import {RoutesTabs} from '@/navigation/routes';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BellIcon} from 'react-native-heroicons/solid';
import TurboImage from 'react-native-turbo-image';

export const Header = () => {
  const active = false;
  const {navigateTo} = useAppNavigation();
  const navigateToNotification = () => navigateTo(RoutesTabs.Notification);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TurboImage
          source={{uri: 'https://placedog.net/300/300?id=1'}}
          style={styles.avatar}
          cachePolicy="urlCache"
        />
        <View style={{marginLeft: 12}}>
          <Text style={styles.text}>Hola, Harvey 👋</Text>
          <Text style={styles.title}>Tu menu de hoy</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{position: 'relative'}}
        onPress={navigateToNotification}>
        <View
          style={{
            backgroundColor: '#ef4444',
            width: 7,
            height: 7,
            borderRadius: 50,
            position: 'absolute',
            right: 4,
            top: 0,
            zIndex: 10,
          }}
        />
        <BellIcon size={24} color="#cbd5e1" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 20,
    color: '#111827',
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  avatar: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: 255,
  },
});
