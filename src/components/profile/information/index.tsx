import {StyleSheet, Text, View} from 'react-native';
import {ClockIcon} from 'react-native-heroicons/outline';

export const Information = () => {
  return (
    <View style={styles.container}>
      <View style={{...styles.containerBox, marginRight: 10, flex: 1}}>
        <Text style={styles.titleRanking}>Ranking</Text>
        <View style={styles.rankingCircle}>
          <Text style={styles.rankingCircleTitle}>80</Text>
        </View>
        <Text style={styles.rankingCircleText}>Estas en el 80 puesto</Text>
      </View>
      <View
        style={{
          ...styles.containerBox,
          marginLeft: 10,
          flex: 2,
        }}>
        <Text style={styles.title}>Tu próxima asistencia</Text>
        <Text
          style={[
            styles.text,
            {marginTop: 16, color: '#1f2937', fontFamily: 'Lexend-Medium'},
          ]}>
          Literatura y comunicación
        </Text>
        <View
          style={{alignItems: 'center', flexDirection: 'row', marginTop: 8}}>
          <ClockIcon size={14} color="#6b7280" />
          <Text style={{...styles.text, marginLeft: 5}}>08:00am - 18:00pm</Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: '#2563eb',
            marginTop: 16,
            fontFamily: 'Lexend-Regular',
          }}>
          50 asistentes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 18,
    color: '#1f2937',
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  containerBox: {
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleRanking: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    color: '#1f2937',
  },
  rankingCircle: {
    borderRadius: 255,
    borderWidth: 4,
    borderColor: '#2563eb',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 8,
  },
  rankingCircleTitle: {
    fontFamily: 'Lexend-ExtraBold',
    color: '#1f2937',
    fontSize: 18,
    letterSpacing: -1,
  },
  rankingCircleText: {
    textAlign: 'center',
    fontFamily: 'Lexend-Regular',
    fontSize: 12,
    marginTop: 10,
  },
});
