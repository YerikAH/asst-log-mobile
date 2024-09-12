import {NotificationList} from '@/components/notification';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ScrollView
        style={{paddingHorizontal: 32, paddingTop: 50}}
        showsVerticalScrollIndicator={false}>
        <NotificationList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
});
