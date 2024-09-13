import {CustomHeader} from '@/components/shared';
import {useAppNavigation} from '@/hooks';
import {RoutesSpace} from '@/navigation/routes';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

export default function MethodSpace() {
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
      <CustomHeader navigate={navigateToSpaces} title="Registrar asistencia" />
      <ScrollView
        style={{paddingHorizontal: 32, paddingTop: 32}}
        showsVerticalScrollIndicator={false}>
        <Text>Hola mundo</Text>
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
