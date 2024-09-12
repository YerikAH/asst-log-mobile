import {FormJoin, OptionsJoin} from '@/components/join-space';
import {CustomHeader} from '@/components/shared';
import {useAppNavigation} from '@/hooks';
import {RoutesSpace} from '@/navigation/routes';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function JoinSpace() {
  const {navigateTo} = useAppNavigation();
  const navigateToSpaces = () => navigateTo(RoutesSpace.Spaces);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <CustomHeader navigate={navigateToSpaces} title="Entrar a asistencia" />
      <ScrollView
        style={{
          paddingTop: 32,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 32}}>
          <FormJoin />
        </View>
        <OptionsJoin />
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
