import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardComponent} from './card-component';

export const OptionsJoin = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <CardComponent
        title="Crear asistencia"
        subtitle="Tus propias asistencias, tus propias reglas"
        tagText="Aún tiene asistencias creadas">
        <View style={styles.containerFlex}>
          <View style={styles.decorationView} />
          <Text style={styles.text}>Es completamente gratis</Text>
        </View>
      </CardComponent>
      <CardComponent
        title="¿No sabes por dónde empezar?"
        style={{
          marginLeft: 16,
          marginRight: 64,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.bigTitle}>
            <Text style={{color: '#8b5cf6'}}>+</Text>15
          </Text>
          <Text style={styles.text}>
            Preguntas que te enseñarán a usar la aplicación
          </Text>
        </View>
      </CardComponent>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 45,
    paddingLeft: 32,
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
