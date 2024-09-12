import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HistoryCard} from './history-card';

export const SpaceHistory = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>Historial de asistencia</Text>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Ver más</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.historyCards}>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 14,
    marginBottom: 100,
  },
  cardHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'Lexend-SemiBold',
    color: '#111827',
  },
  headerButton: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#2563eb',
  },
  historyCards: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
});
