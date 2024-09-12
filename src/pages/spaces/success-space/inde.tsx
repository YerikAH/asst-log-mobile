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

export default function SuccessSpace() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ScrollView
        style={{
          paddingTop: 32,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 32,
            flex: 1,
            height: '100%',
          }}>
          <View></View>
          <View style={styles.containerMessage}>
            <Image source={iconSuccess} style={styles.icon} />
            <Text style={styles.title}>¡Registro exitoso!</Text>
            <Text style={styles.text}>
              {' '}
              Tu asistencia ha sido registrada correctamente en el equipo de{' '}
              <Text style={{color: '#111827', fontFamily: 'Lexend-SemiBold'}}>
                Recursos humanos
              </Text>
              . ¡Gracias por participar!
            </Text>

            <Text style={styles.text}>
              Llegaste a tiempo, buena suerte el día de hoy. Te recomendamos
              leer nuestros últimos tips.
            </Text>

            <View style={styles.containerTag}>
              <TouchableOpacity style={styles.tagButton}>
                <BoltIcon color="#eab308" size={14} />
                <Text style={styles.tagButtonText}>
                  Cómo levantarse temprano todos los días
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tagButton}>
                <Battery50Icon color="#3b82f6" size={14} />
                <Text style={styles.tagButtonText}>
                  La importancia de dormir correctamente
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              rowGap: 10,
              paddingBottom: 32,
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver mis asistencias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: '#FFF',
                borderColor: '#f3f4f6',
                borderWidth: 1,
                elevation: 0.6,
              }}>
              <Text style={{...styles.buttonText, color: '#111827'}}>
                Volver atrás
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <ConfettiCannon
        count={200}
        origin={{x: -40, y: 0}}
        fallSpeed={6000}
        explosionSpeed={100}
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
  containerMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 16,
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

  button: {
    backgroundColor: '#2563eb',
    borderRadius: 255,
    paddingHorizontal: 32,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Lexend-Medium',
    marginLeft: 6,
  },
  icon: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
  containerTag: {
    marginTop: 24,
  },
  tagButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#f3f4f6',
    borderRadius: 255,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
    elevation: 1,
  },
  tagButtonText: {
    fontSize: 12,
    fontFamily: 'Lexend-Regular',
    marginLeft: 8,
    color: '#111827',
  },
});
