import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SpaceCardHeader} from './space-card-header';
import {SpaceCardContent} from './space-card-content';

interface Props {
  id: string;
  active: boolean;
  attendanceName: string;
  attendance: string;
  attendanceTotal: string;
  icon: string;
  color: string;
  ranking: string;
  entryTime: string;
  departureTime: string;
}
export const SpaceCard = ({
  id,
  active,
  color,
  icon,
  attendance,
  attendanceName,
  attendanceTotal,
  departureTime,
  entryTime,
  ranking,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const height = useSharedValue(85);
  const config = {
    duration: 300,
  };

  const styleCard = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, config),
    };
  });

  const toggleActive = () => {
    setIsActive(!isActive);
    height.value = isActive ? 85 : 380;
  };

  useEffect(() => {
    if (!active) return;
    toggleActive();
  }, [active]);

  return (
    <TouchableOpacity onPress={toggleActive}>
      <Animated.View
        style={[
          styles.card,
          {backgroundColor: isActive ? color : '#FFF'},
          styleCard,
        ]}>
        <SpaceCardHeader
          isActive={isActive}
          attendanceName={attendanceName}
          attendanceTotal={attendanceTotal}
          color={color}
        />
        {isActive && (
          <SpaceCardContent
            attendance={attendance}
            attendanceTotal={attendanceTotal}
            departureTime={departureTime}
            entryTime={entryTime}
            ranking={ranking}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 35,
    height: 85,
    marginBottom: 8,
  },
});
