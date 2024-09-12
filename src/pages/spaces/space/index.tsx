import {CustomHeader} from '@/components/shared';
import {useAppNavigation} from '@/hooks';
import {RoutesSpace} from '@/navigation/routes';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {
  FloatingButton,
  SpaceCurrentInfo,
  SpaceHistory,
  SpaceInfo,
} from '@/components/space';

export default function Space() {
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
      <CustomHeader
        navigate={navigateToSpaces}
        title="Asistencia de desarrollo"
      />
      <ScrollView
        style={{paddingHorizontal: 32, paddingTop: 32}}
        showsVerticalScrollIndicator={false}>
        <SpaceInfo />
        <SpaceCurrentInfo />
        <SpaceHistory />
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
});
