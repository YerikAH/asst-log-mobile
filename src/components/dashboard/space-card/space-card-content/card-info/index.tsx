import {StyleSheet, Text, View} from 'react-native';
import {CardInfoItem} from './card-info-item';

interface Props {
  departureTime: string;
  entryTime: string;
  ranking: string;
}

export const CardInfo = ({departureTime, entryTime, ranking}: Props) => (
  <View style={{marginTop: 16}}>
    <Text style={styles.contentTitle}>Más información</Text>
    <View style={{marginTop: 10}}>
      <CardInfoItem title="Tu ranking" value={ranking} />
      <CardInfoItem title="Hora de entrada" value={entryTime} />
      <CardInfoItem title="Hora de salida" value={departureTime} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  contentTitle: {
    fontFamily: 'Lexend-Medium',
    fontSize: 16,
    color: '#FFF',
  },
});
