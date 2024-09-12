import {StyleSheet, View, Text} from 'react-native';
import {ArrowDownOnSquareStackIcon} from 'react-native-heroicons/outline';

export const HistoryCard = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.containerIcon}>
        <ArrowDownOnSquareStackIcon size={24} color="#22c55e" />
      </View> */}
      <View style={styles.containerRow}>
        <View>
          <Text style={styles.text}>07: 47</Text>
          <Text style={styles.title}>Febrero 23 del 2024</Text>
          <Text style={{...styles.subtitle, color: '#22c55e'}}>Entrada</Text>
        </View>
        <View>
          <Text
            style={{
              ...styles.text,
              backgroundColor: '#dcfce7',
              color: '#22c55e',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 15,
            }}>
            Temprano
          </Text>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Lexend-SemiBold',
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
