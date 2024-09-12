import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
} from 'react-native';
import logo from '@/assets/logo.png';
import {KeyIcon, BuildingOfficeIcon} from 'react-native-heroicons/solid';
import {useAppNavigation} from '@/hooks';
import {Routes} from '@/navigation/routes';

export default function Home() {
  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(Routes.Register);
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 20,
            marginTop: 42,
            marginBottom: 24,
            backgroundColor: '#fff',
            borderRadius: 24,
          }}>
          <Image source={logo} style={styles.containerLogo} />
          <View style={styles.tag}>
            <Text style={styles.tagText}>Registro de asistencias</Text>
          </View>
          <Text style={styles.title}>
            Bienvenido a denuevo a{'\n'}nuestro AsstLog
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            ligula eu enim scelerisque sollicitudin id a urna.
          </Text>
          <TouchableOpacity style={styles.button} onPress={navigateToRegister}>
            <>
              <KeyIcon size={16} color="#fff" />
              <Text style={styles.buttonText}>Registra tu asistencia</Text>
            </>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => openLink('')}>
            <>
              <BuildingOfficeIcon size={16} color="#2563eb" />
              <View style={{marginLeft: 6}}>
                <Text style={styles.secondayButtonTitle}>Crear empresa</Text>
                <Text style={styles.secondaryButtonText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus vel ligula eu enim.
                </Text>
              </View>
            </>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 32,
    flex: 1,
  },
  containerLogo: {
    width: 150,
    height: 50,
    objectFit: 'contain',
  },
  tag: {
    backgroundColor: '#dbeafe',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 255,
    marginTop: 24,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#1e3a8a',
    fontFamily: 'Lexend-Regular',
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    color: '#111827',
    fontFamily: 'Lexend-Bold',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
    fontFamily: 'Lexend-Regular',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 255,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Lexend-Medium',
    marginLeft: 6,
  },
  secondaryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    borderRadius: 20,
    marginTop: 16,
    flexDirection: 'row',
  },
  secondayButtonTitle: {
    fontSize: 14,
    color: '#2563eb',
    fontFamily: 'Lexend-Medium',
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'Lexend-Regular',
  },
});
