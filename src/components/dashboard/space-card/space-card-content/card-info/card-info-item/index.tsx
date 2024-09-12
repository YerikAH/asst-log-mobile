import {StyleSheet, Text, View} from 'react-native';

export const CardInfoItem: React.FC<{title: string; value: string}> = ({
  title,
  value,
}) => (
  <View style={styles.cardInfo}>
    <Text style={styles.cardInfoTitle}>{title}</Text>
    <Text style={styles.cardInfoText}>{value}</Text>
  </View>
);
const styles = StyleSheet.create({
  cardInfo: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: '#FFFFFF66',
    paddingVertical: 6,
    justifyContent: 'space-between',
  },
  cardInfoTitle: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#FFF',
  },
  cardInfoText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#FFFFFFCC',
  },
});
