import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/outline';
import {ProgressBar} from './progress-bar';
import {CardInfo} from './card-info';

interface Props {
  attendance: string;
  attendanceTotal: string;
  departureTime: string;
  entryTime: string;
  ranking: string;
}
export const SpaceCardContent = ({
  attendance,
  attendanceTotal,
  departureTime,
  entryTime,
  ranking,
}: Props) => {
  const progress = (Number(attendance) / Number(attendanceTotal)) * 100;
  return (
    <View style={styles.cardContent}>
      <View style={styles.cardContentHeader}>
        <Text style={styles.contentNumberBig}>
          {attendance}
          <Text style={styles.contentNumber}> de {attendanceTotal}</Text>
        </Text>
        <Text style={[styles.contentText, {marginBottom: 8}]}>asistentes</Text>
      </View>
      <ProgressBar progress={progress} />
      <CardInfo
        departureTime={departureTime}
        entryTime={entryTime}
        ranking={ranking}
      />
      <TouchableOpacity style={styles.buttonCardInfo}>
        <PlusIcon size={14} color="#FFF" strokeWidth={3} />
        <Text style={styles.buttonTextCardInfo}>Registrar asistencia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardContent: {
    borderTopWidth: 0.5,
    borderColor: '#FFF',
    padding: 18,
  },
  contentNumberBig: {
    fontFamily: 'Lexend-Bold',
    fontSize: 60,
    color: '#FFF',
    lineHeight: 60,
  },
  contentNumber: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 20,
    color: '#FFFFFFB3',
  },
  contentText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#FFF',
  },
  contentTitle: {
    fontFamily: 'Lexend-Medium',
    fontSize: 16,
    color: '#FFF',
  },

  buttonCardInfo: {
    borderWidth: 1,
    borderRadius: 255,
    borderColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    marginTop: 14,
  },
  buttonTextCardInfo: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
});
