import {View} from 'react-native';
import {SpaceCard} from '../space-card';

const spaceCardsData = [
  {
    id: '1',
    attendance: '5',
    attendanceName: 'Arte',
    attendanceTotal: '50',
    color: '#0284c7',
    departureTime: '9:00pm',
    entryTime: '8:00am',
    icon: 'paint-brush', // Suponiendo que 'icon' es una referencia a un icono específico
    ranking: '5',
  },
  {
    id: '2',
    attendance: '25',
    attendanceName: 'Música',
    attendanceTotal: '60',
    color: '#4338ca',
    departureTime: '6:00pm',
    entryTime: '9:00am',
    icon: 'music-note',
    ranking: '2',
  },
  {
    id: '3',
    attendance: '30',
    attendanceName: 'Deporte',
    attendanceTotal: '40',
    color: '#1d4ed8',
    departureTime: '7:00pm',
    entryTime: '10:00am',
    icon: 'football',
    ranking: '1',
  },
  // Agrega más objetos según sea necesario
];

export const SpaceCardList: React.FC = () => {
  return (
    <View>
      {spaceCardsData.map((card, idx) => (
        <SpaceCard
          key={card.id}
          active={idx === 0}
          attendance={card.attendance}
          attendanceName={card.attendanceName}
          attendanceTotal={card.attendanceTotal}
          color={card.color}
          departureTime={card.departureTime}
          entryTime={card.entryTime}
          icon={card.icon}
          id={card.id}
          ranking={card.ranking}
        />
      ))}
    </View>
  );
};
