import {Header, SpaceCardList} from '@/components/dashboard';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50}}>
          <Header />
        </View>
        <View style={{paddingHorizontal: 32, marginTop: 24}}>
          <SpaceCardList />
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
