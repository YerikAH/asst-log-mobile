import {StyleSheet, Text, View} from 'react-native';
import {ChevronDownIcon} from 'react-native-heroicons/outline';
import {PaintBrushIcon} from 'react-native-heroicons/solid';

interface Props {
  attendanceName: string;
  attendanceTotal: string;
  isActive: boolean;
  color: string;
}
export const SpaceCardHeader = ({
  isActive,
  attendanceName,
  attendanceTotal,
  color,
}: Props) => (
  <View style={styles.cardHeader}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={[
          styles.iconContainer,
          {backgroundColor: isActive ? '#FFF' : color},
        ]}>
        <PaintBrushIcon color={isActive ? color : '#FFF'} size={20} />
      </View>
      <View style={{marginLeft: 12}}>
        <Text style={[styles.title, {color: isActive ? '#FFF' : '#111827'}]}>
          {attendanceName}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: isActive ? '#e4e4e7' : '#6b7280',
            },
          ]}>
          {attendanceTotal} asistencias
        </Text>
      </View>
    </View>
    <ChevronDownIcon
      size={18}
      color={isActive ? '#FFF' : '#111827'}
      strokeWidth={2}
    />
  </View>
);

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
  },
  title: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 14,
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 255,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
