import {StyleSheet, Text, View} from 'react-native';
import {ChartAttendance} from './chart-attendance';
import {BuildingOffice2Icon, ClockIcon} from 'react-native-heroicons/solid';
import TurboImage from 'react-native-turbo-image';

const statusChart = [
  {name: 'Temprano', color: '#22c55e'},
  {name: 'Tarde', color: '#eab308'},
  {name: 'No asistido', color: '#ef4444'},
  {name: 'Justificado', color: '#3b82f6'},
];

export const SpaceInfo = () => {
  return (
    <View style={{backgroundColor: '#FFF', marginBottom: 16, borderRadius: 20}}>
      <ChartAttendance />
      <View style={styles.statusContainer}>
        {statusChart.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{backgroundColor: item.color, ...styles.statusColor}}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
  subtitle: {
    fontFamily: 'Lexend-Medium',
    fontSize: 14,
    color: '#374151',
  },
  statusContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
    padding: 16,
  },
  statusColor: {
    width: 15,
    height: 15,
    borderRadius: 4,
  },
});
