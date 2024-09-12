import {StyleSheet, Text, View} from 'react-native';
import {CheckCircleIcon, CheckIcon} from 'react-native-heroicons/solid';

export const NotificationCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <CheckCircleIcon size={15} color="#FFF" />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>No olvides marcar tu asistencia</Text>
        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus
          aliquid obcaecati totam labore veritatis similique
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 12,
    color: '#111827',
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    // borderBottomWidth: 0.5,
    // borderColor: '#e5e7eb',
  },
});
