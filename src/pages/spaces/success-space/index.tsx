import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import iconSuccess from '@/assets/icon-success.png';
import {Battery50Icon, BoltIcon} from 'react-native-heroicons/solid';
import {ActionButton} from '@/components/success-space';
import {RoutesSpace} from '@/navigation/routes';
import {useAppNavigation} from '@/hooks';

export default function SuccessSpace() {
  const {navigateTo} = useAppNavigation();
  const navigateToBack = () => navigateTo(RoutesSpace.Space);
  const navigateToAttendance = () => navigateTo(RoutesSpace.Spaces);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerMessage}>
          <Image source={iconSuccess} style={styles.icon} />
          <Text style={styles.title}>¡Registro exitoso!</Text>
          <Text style={styles.text}>
            Tu asistencia ha sido registrada correctamente en el equipo de{' '}
            <Text style={styles.textBold}>Recursos humanos</Text>. ¡Gracias por
            participar!
          </Text>

          <Text style={styles.text}>
            Llegaste a tiempo, buena suerte el día de hoy. Te recomendamos leer
            nuestros últimos tips.
          </Text>

          <View style={styles.containerTag}>
            <ActionButton
              icon={BoltIcon}
              text="Cómo levantarse temprano todos los días"
              onPress={() => console.log('Levantarse temprano')}
              colorIcon="#eab308"
            />
            <ActionButton
              icon={Battery50Icon}
              text="Cómo levantarse temprano todos los días"
              onPress={() => console.log('Levantarse temprano')}
              colorIcon="#3b82f6"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={navigateToAttendance}>
            <Text style={[styles.buttonTextPrimary, styles.buttonText]}>
              Ver mis asistencias
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonSecondary, styles.button]}
            onPress={navigateToBack}>
            <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
              Volver atrás
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ConfettiCannon
        count={100}
        origin={{x: -40, y: 0}}
        fallSpeed={2000}
        explosionSpeed={350}
        colors={['#6366f1', '#22c55e', '#3b82f6', '#0ea5e9']}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 32,
    justifyContent: 'space-between',
  },
  containerMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lexend-ExtraBold',
    color: '#111827',
    textAlign: 'center',
    marginTop: 24,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  textBold: {
    color: '#111827',
    fontFamily: 'Lexend-SemiBold',
  },
  button: {
    borderRadius: 255,
    paddingHorizontal: 32,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Lexend-Medium',
    marginLeft: 6,
  },
  buttonPrimary: {
    backgroundColor: '#2563eb',
  },
  buttonTextPrimary: {
    color: '#fff',
  },
  buttonSecondary: {
    backgroundColor: '#FFF',
    borderColor: '#f3f4f6',
    borderWidth: 1,
    elevation: 0.6,
  },
  buttonTextSecondary: {
    color: '#111827',
  },
  icon: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
  containerTag: {
    marginTop: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 32,
    paddingHorizontal: 32,
    rowGap: 10,
  },
});
