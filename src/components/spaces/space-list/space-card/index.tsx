import {useAppNavigation} from '@/hooks';
import {RoutesSpace} from '@/navigation/routes';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PaintBrushIcon} from 'react-native-heroicons/solid';

interface Props {
  color: string;
  icon: string;
  title: string;
  totalAttendance: string;
  attendance: string;
}

export const SpaceCard = ({
  attendance,
  color,
  icon,
  title,
  totalAttendance,
}: Props) => {
  const {navigateTo} = useAppNavigation();
  const navigateToSpace = () => navigateTo(RoutesSpace.Space);

  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: color}]}
      onPress={navigateToSpace}>
      <View style={styles.iconCard}>
        <View style={styles.iconBackground} />
        <PaintBrushIcon size={20} color={color} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>
          {attendance}/{totalAttendance} asistentes
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 25,
    padding: 20,
    height: 140,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  iconCard: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 255,
    backgroundColor: '#FFF',
    zIndex: -1,
    opacity: 0.6,
    position: 'absolute',
  },
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 14,
    color: '#FFF',
    marginTop: 10,
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#FFF',
    opacity: 0.7,
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 255,
  },
});
