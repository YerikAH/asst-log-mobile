import {StyleSheet, Text, View} from 'react-native';

interface Props {
  colorHigh: string;
  icon: React.ElementType;
  title: string;
  type: string;
  status: string;
  points?: string;
}
export const SpaceCard = ({
  colorHigh,
  icon: Icon,
  points,
  status,
  title,
  type,
}: Props) => {
  console.log(colorHigh);
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 5,
          flex: 1,
        }}>
        <View style={styles.iconCard}>
          <View
            style={{...styles.iconBackground, backgroundColor: colorHigh}}
          />
          <Icon size={18} color="#FFF" strokeWidth={1.5} />
        </View>
        <Text style={styles.iconText} numberOfLines={2} ellipsizeMode="tail">
          {type}
        </Text>
      </View>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.cardText}>{status}</Text>
          {points && (
            <Text style={[styles.cardText, {color: '#4ade80'}]}>{points}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 25,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  iconCard: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    zIndex: -1,
    position: 'absolute',
  },
  iconText: {
    fontFamily: 'Lexend-Medium',
    fontSize: 14,
    color: '#6b7280',
    flex: 1,
    overflow: 'hidden',
    width: '100%',
  },
  cardTitle: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginTop: 14,
  },
  cardText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#6b7280',
  },
});
