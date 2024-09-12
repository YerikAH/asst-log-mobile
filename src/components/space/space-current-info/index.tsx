import {StyleSheet, View} from 'react-native';
import {SpaceCard} from './space-card';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  PlayIcon,
  StopIcon,
} from 'react-native-heroicons/solid';

export const SpaceCurrentInfo = () => {
  return (
    <View>
      <View style={styles.cards}>
        <SpaceCard
          colorHigh="#22c55e"
          icon={ArrowRightCircleIcon}
          points="+150pt"
          status="A tiempo"
          title="8:30am"
          type="Entrada"
        />
        <SpaceCard
          colorHigh="#ef4444"
          icon={ArrowLeftCircleIcon}
          points="+150pt"
          status="A tiempo"
          title="8:30am"
          type="Salida"
        />
      </View>
      <View style={styles.cards}>
        <SpaceCard
          colorHigh="#8b5cf6"
          icon={PlayIcon}
          status="A tiempo"
          title="8:30am"
          type="Empezar trabajo"
        />
        <SpaceCard
          colorHigh="#06b6d4"
          icon={StopIcon}
          status="5h 00m 32s"
          title="11:30am"
          type="Finalizar trabajo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 10,
  },
});
