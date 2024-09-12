import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SpaceCard} from './space-card';
import {PlusIcon} from 'react-native-heroicons/outline';
import {useAppNavigation} from '@/hooks';
import {RoutesSpace} from '@/navigation/routes';

const spaceCardObjects = [
  {
    color: '#3498db', // Azul
    icon: 'PaintBrushIcon', // Ejemplo de ícono, puedes cambiarlo por otro de la librería
    title: 'Asistencia Total',
    totalAttendance: '100',
    attendance: '75',
  },
  {
    color: '#3498db', // Azul
    icon: 'PaintBrushIcon', // Ejemplo de ícono, puedes cambiarlo por otro de la librería
    title: 'Asistencia Total',
    totalAttendance: '100',
    attendance: '75',
  },
];

export const SpaceList = () => {
  const {navigateTo} = useAppNavigation();
  const navigateToDashboard = () => navigateTo(RoutesSpace.JoinSpace);
  return (
    <View>
      {spaceCardObjects.map((space, idx) => {
        if (idx % 2 === 1) {
          const prevSpace = spaceCardObjects[idx - 1];
          return (
            <View style={styles.cards} key={idx}>
              <SpaceCard
                color={prevSpace.color}
                icon={prevSpace.icon}
                title={prevSpace.title}
                totalAttendance={prevSpace.totalAttendance}
                attendance={prevSpace.attendance}
              />
              <SpaceCard
                color={space.color}
                icon={space.icon}
                title={space.title}
                totalAttendance={space.totalAttendance}
                attendance={space.attendance}
              />
            </View>
          );
        }

        if (idx === spaceCardObjects.length - 1 && idx % 2 === 0) {
          return (
            <View style={styles.cards} key={idx}>
              <SpaceCard
                color={space.color}
                icon={space.icon}
                title={space.title}
                totalAttendance={space.totalAttendance}
                attendance={space.attendance}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={navigateToDashboard}>
                <PlusIcon color="#cbd5e1" size={16} strokeWidth={3} />
              </TouchableOpacity>
            </View>
          );
        }
        return null;
      })}
      {spaceCardObjects.length % 2 === 0 && (
        <View style={styles.cards}>
          <TouchableOpacity style={styles.button} onPress={navigateToDashboard}>
            <PlusIcon color="#cbd5e1" size={16} strokeWidth={3} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 25,
    padding: 20,
    height: 140,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
