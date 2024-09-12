import {StyleSheet, View, Text} from 'react-native';
import {ArrowDownOnSquareStackIcon} from 'react-native-heroicons/outline';

export const HistoryCard = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.containerIcon}>
        <ArrowDownOnSquareStackIcon size={24} color="#22c55e" />
      </View> */}
      <View style={{flex: 1}}>
        <View style={styles.containerRow}>
          <Text style={styles.title}>Entrada</Text>
          <Text style={styles.subtitle}>07: 47</Text>
        </View>
        <View style={styles.containerRow}>
          <Text style={styles.text}>Febrero 23 del 2024</Text>
          <Text style={styles.text}>Temprano</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Lexend-Medium',
    color: '#111827',
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Lexend-Medium',
    color: '#111827',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Lexend-Regular',
    color: '#6b7280',
  },
  containerIcon: {
    backgroundColor: '#dcfce7',
    width: 40,
    height: 40,
    borderRadius: 255,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
});
