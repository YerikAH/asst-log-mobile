import {Avatar, Information, Options} from '@/components/profile';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ScrollView
        style={{paddingHorizontal: 32}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50}}>
          <Avatar />
          <Information />
          <Options />
        </View>
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
