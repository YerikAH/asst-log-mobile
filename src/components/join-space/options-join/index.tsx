import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const OptionsJoin = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <TouchableOpacity style={styles.containerCard}>
        <Text style={styles.title}>Crear asistencia</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>Aún tiene asistencias creadas</Text>
        </View>
        <Text style={styles.subtitle}>
          Tus propias asistencias tus propias reglas
        </Text>
        <View style={styles.containerFlex}>
          <View style={styles.decorationView} />
          <Text style={styles.text}>Es completamente gratis</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.containerCard,
          {marginLeft: 16, marginRight: 64, justifyContent: 'space-between'},
        ]}>
        <Text style={styles.title}>¿No sabes por dónde empezar?</Text>
        <View>
          <Text style={styles.bigTitle}>15+</Text>
          <Text style={styles.text}>
            Preguntas que te enseñaran a usar la aplicación
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 45,
    paddingLeft: 32,
  },
  containerCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 16,
    width: 300,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lexend-Bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#111827',
    marginTop: 16,
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#ef4444',
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#fee2e2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginTop: 48,
  },
  containerFlex: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16,
  },
  decorationView: {
    width: 15,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#6b7280',
  },
  bigTitle: {
    fontSize: 60,
    fontFamily: 'Lexend-ExtraBold',
    color: '#111827',
  },
});
