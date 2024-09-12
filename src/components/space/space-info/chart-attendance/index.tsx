import {ScrollView} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';
import {ContributionChartValue} from 'react-native-chart-kit/dist/contribution-graph/ContributionGraph';
import {RectProps} from 'react-native-svg';

const attendanceData = [
  // Enero
  {date: '2023-01-02', count: 1}, // Asistió
  {date: '2023-01-03', count: 1}, // Asistió
  {date: '2023-01-04', count: 1}, // Asistió
  {date: '2023-01-05', count: 1}, // Asistió
  {date: '2023-01-06', count: 1}, // Asistió
  {date: '2023-01-09', count: 2}, // Tarde
  {date: '2023-01-10', count: 1}, // Asistió
  {date: '2023-01-11', count: 1}, // Asistió
  {date: '2023-01-12', count: 1}, // Asistió
  {date: '2023-01-13', count: 1}, // Asistió
  {date: '2023-01-16', count: 1}, // Asistió
  {date: '2023-01-17', count: 1}, // Asistió
  {date: '2023-01-18', count: 3}, // Faltó
  {date: '2023-01-19', count: 1}, // Asistió
  {date: '2023-01-20', count: 1}, // Asistió
  {date: '2023-01-23', count: 1}, // Asistió
  {date: '2023-01-24', count: 1}, // Asistió
  {date: '2023-01-25', count: 1}, // Asistió
  {date: '2023-01-26', count: 1}, // Asistió
  {date: '2023-01-27', count: 1}, // Asistió
  {date: '2023-01-30', count: 1}, // Asistió
  {date: '2023-01-31', count: 1}, // Asistió

  // Febrero
  {date: '2023-02-01', count: 1}, // Asistió
  {date: '2023-02-02', count: 1}, // Asistió
  {date: '2023-02-03', count: 1}, // Asistió
  {date: '2023-02-06', count: 1}, // Asistió
  {date: '2023-02-07', count: 1}, // Asistió
  {date: '2023-02-08', count: 2}, // Tarde
  {date: '2023-02-09', count: 1}, // Asistió
  {date: '2023-02-10', count: 1}, // Asistió
  {date: '2023-02-13', count: 1}, // Asistió
  {date: '2023-02-14', count: 1}, // Asistió
  {date: '2023-02-15', count: 1}, // Asistió
  {date: '2023-02-16', count: 1}, // Asistió
  {date: '2023-02-17', count: 1}, // Asistió
  {date: '2023-02-20', count: 1}, // Asistió
  {date: '2023-02-21', count: 1}, // Asistió
  {date: '2023-02-22', count: 1}, // Asistió
  {date: '2023-02-23', count: 1}, // Asistió
  {date: '2023-02-24', count: 1}, // Asistió
  {date: '2023-02-27', count: 1}, // Asistió
  {date: '2023-02-28', count: 1}, // Asistió

  // Marzo
  {date: '2023-03-01', count: 1}, // Asistió
  {date: '2023-03-02', count: 1}, // Asistió
  {date: '2023-03-03', count: 1}, // Asistió
  {date: '2023-03-06', count: 1}, // Asistió
  {date: '2023-03-07', count: 1}, // Asistió
  {date: '2023-03-08', count: 1}, // Asistió
  {date: '2023-03-09', count: 1}, // Asistió
  {date: '2023-03-10', count: 1}, // Asistió
  {date: '2023-03-13', count: 1}, // Asistió
  {date: '2023-03-14', count: 1}, // Asistió
  {date: '2023-03-15', count: 2}, // Tarde
  {date: '2023-03-16', count: 1}, // Asistió
  {date: '2023-03-17', count: 1}, // Asistió
  {date: '2023-03-20', count: 1}, // Asistió
  {date: '2023-03-21', count: 1}, // Asistió
  {date: '2023-03-22', count: 1}, // Asistió
  {date: '2023-03-23', count: 1}, // Asistió
  {date: '2023-03-24', count: 1}, // Asistió
  {date: '2023-03-27', count: 1}, // Asistió
  {date: '2023-03-28', count: 1}, // Asistió
  {date: '2023-03-29', count: 1}, // Asistió
  {date: '2023-03-30', count: 1}, // Asistió
  {date: '2023-03-31', count: 1}, // Asistió

  // Abril
  {date: '2023-04-03', count: 1}, // Asistió
  {date: '2023-04-04', count: 1}, // Asistió
  {date: '2023-04-05', count: 1}, // Asistió
  {date: '2023-04-06', count: 1}, // Asistió
  {date: '2023-04-07', count: 1}, // Asistió
  {date: '2023-04-10', count: 1}, // Asistió
  {date: '2023-04-11', count: 1}, // Asistió
  {date: '2023-04-12', count: 1}, // Asistió
  {date: '2023-04-13', count: 1}, // Asistió
  {date: '2023-04-14', count: 3}, // Faltó
  {date: '2023-04-17', count: 1}, // Asistió
  {date: '2023-04-18', count: 1}, // Asistió
  {date: '2023-04-19', count: 1}, // Asistió
  {date: '2023-04-20', count: 1}, // Asistió
  {date: '2023-04-21', count: 1}, // Asistió
  {date: '2023-04-24', count: 1}, // Asistió
  {date: '2023-04-25', count: 1}, // Asistió
  {date: '2023-04-26', count: 2}, // Tarde
  {date: '2023-04-27', count: 1}, // Asistió
  {date: '2023-04-28', count: 1}, // Asistió
  // Mayo
  {date: '2023-05-01', count: 1}, // Asistió
  {date: '2023-05-02', count: 1}, // Asistió
  {date: '2023-05-03', count: 1}, // Asistió
  {date: '2023-05-04', count: 1}, // Asistió
  {date: '2023-05-05', count: 1}, // Asistió
  {date: '2023-05-08', count: 2}, // Tarde
  {date: '2023-05-09', count: 1}, // Asistió
  {date: '2023-05-10', count: 1}, // Asistió
  {date: '2023-05-11', count: 1}, // Asistió
  {date: '2023-05-12', count: 1}, // Asistió
  {date: '2023-05-15', count: 1}, // Asistió
  {date: '2023-05-16', count: 1}, // Asistió
  {date: '2023-05-17', count: 3}, // Faltó
  {date: '2023-05-18', count: 1}, // Asistió
  {date: '2023-05-19', count: 1}, // Asistió
  {date: '2023-05-22', count: 1}, // Asistió
  {date: '2023-05-23', count: 1}, // Asistió
  {date: '2023-05-24', count: 1}, // Asistió
  {date: '2023-05-25', count: 1}, // Asistió
  {date: '2023-05-26', count: 1}, // Asistió
  {date: '2023-05-29', count: 1}, // Asistió
  {date: '2023-05-30', count: 1}, // Asistió
  {date: '2023-05-31', count: 1}, // Asistió

  // Junio
  {date: '2023-06-01', count: 1}, // Asistió
  {date: '2023-06-02', count: 1}, // Asistió
  {date: '2023-06-05', count: 1}, // Asistió
  {date: '2023-06-06', count: 1}, // Asistió
  {date: '2023-06-07', count: 2}, // Tarde
  {date: '2023-06-08', count: 1}, // Asistió
  {date: '2023-06-09', count: 1}, // Asistió
  {date: '2023-06-12', count: 1}, // Asistió
  {date: '2023-06-13', count: 1}, // Asistió
  {date: '2023-06-14', count: 1}, // Asistió
  {date: '2023-06-15', count: 1}, // Asistió
  {date: '2023-06-16', count: 1}, // Asistió
  {date: '2023-06-19', count: 1}, // Asistió
  {date: '2023-06-20', count: 1}, // Asistió
  {date: '2023-06-21', count: 1}, // Asistió
  {date: '2023-06-22', count: 1}, // Asistió
  {date: '2023-06-23', count: 1}, // Asistió
  {date: '2023-06-26', count: 1}, // Asistió
  {date: '2023-06-27', count: 1}, // Asistió
  {date: '2023-06-28', count: 1}, // Asistió
  {date: '2023-06-29', count: 1}, // Asistió
  {date: '2023-06-30', count: 1}, // Asistió

  // Julio
  {date: '2023-07-03', count: 1}, // Asistió
  {date: '2023-07-04', count: 1}, // Asistió
  {date: '2023-07-05', count: 1}, // Asistió
  {date: '2023-07-06', count: 1}, // Asistió
  {date: '2023-07-07', count: 1}, // Asistió
  {date: '2023-07-10', count: 2}, // Tarde
  {date: '2023-07-11', count: 1}, // Asistió
  {date: '2023-07-12', count: 1}, // Asistió
  {date: '2023-07-13', count: 1}, // Asistió
  {date: '2023-07-14', count: 1}, // Asistió
  {date: '2023-07-17', count: 1}, // Asistió
  {date: '2023-07-18', count: 1}, // Asistió
  {date: '2023-07-19', count: 3}, // Faltó
  {date: '2023-07-20', count: 1}, // Asistió
  {date: '2023-07-21', count: 1}, // Asistió
  {date: '2023-07-24', count: 1}, // Asistió
  {date: '2023-07-25', count: 1}, // Asistió
  {date: '2023-07-26', count: 1}, // Asistió
  {date: '2023-07-27', count: 1}, // Asistió
  {date: '2023-07-28', count: 1}, // Asistió
  {date: '2023-07-31', count: 1}, // Asistió

  // Agosto
  {date: '2023-08-01', count: 1}, // Asistió
  {date: '2023-08-02', count: 1}, // Asistió
  {date: '2023-08-03', count: 1}, // Asistió
  {date: '2023-08-04', count: 1}, // Asistió
  {date: '2023-08-07', count: 1}, // Asistió
  {date: '2023-08-08', count: 1}, // Asistió
  {date: '2023-08-09', count: 2}, // Tarde
  {date: '2023-08-10', count: 1}, // Asistió
  {date: '2023-08-11', count: 1}, // Asistió
  {date: '2023-08-14', count: 1}, // Asistió
  {date: '2023-08-15', count: 1}, // Asistió
  {date: '2023-08-16', count: 1}, // Asistió
  {date: '2023-08-17', count: 1}, // Asistió
  {date: '2023-08-18', count: 1}, // Asistió
  {date: '2023-08-21', count: 1}, // Asistió
  {date: '2023-08-22', count: 1}, // Asistió
  {date: '2023-08-23', count: 1}, // Asistió
  {date: '2023-08-24', count: 1}, // Asistió
  {date: '2023-08-25', count: 1}, // Asistió
  {date: '2023-08-28', count: 1}, // Asistió
  {date: '2023-08-29', count: 1}, // Asistió
  {date: '2023-08-30', count: 1}, // Asistió
  {date: '2023-08-31', count: 1}, // Asistió

  // Septiembre
  {date: '2023-09-01', count: 1}, // Asistió
  {date: '2023-09-04', count: 1}, // Asistió
  {date: '2023-09-05', count: 1}, // Asistió
  {date: '2023-09-06', count: 1}, // Asistió
  {date: '2023-09-07', count: 1}, // Asistió
  {date: '2023-09-08', count: 1}, // Asistió
  {date: '2023-09-11', count: 2}, // Tarde
  {date: '2023-09-12', count: 1}, // Asistió
  {date: '2023-09-13', count: 1}, // Asistió
  {date: '2023-09-14', count: 1}, // Asistió
  {date: '2023-09-15', count: 1}, // Asistió
  {date: '2023-09-18', count: 1}, // Asistió
  {date: '2023-09-19', count: 1}, // Asistió
  {date: '2023-09-20', count: 3}, // Faltó
  {date: '2023-09-21', count: 1}, // Asistió
  {date: '2023-09-22', count: 1}, // Asistió
  {date: '2023-09-25', count: 1}, // Asistió
  {date: '2023-09-26', count: 1}, // Asistió
  {date: '2023-09-27', count: 1}, // Asistió
  {date: '2023-09-28', count: 1}, // Asistió
  {date: '2023-09-29', count: 1}, // Asistió

  // Octubre
  {date: '2023-10-02', count: 1}, // Asistió
  {date: '2023-10-03', count: 1}, // Asistió
  {date: '2023-10-04', count: 1}, // Asistió
  {date: '2023-10-05', count: 1}, // Asistió
  {date: '2023-10-06', count: 1}, // Asistió
  {date: '2023-10-09', count: 1}, // Asistió
  {date: '2023-10-10', count: 1}, // Asistió
  {date: '2023-10-11', count: 2}, // Tarde
  {date: '2023-10-12', count: 1}, // Asistió
  {date: '2023-10-13', count: 1}, // Asistió
  {date: '2023-10-16', count: 1}, // Asistió
  {date: '2023-10-17', count: 1}, // Asistió
  {date: '2023-10-18', count: 1}, // Asistió
  {date: '2023-10-19', count: 1}, // Asistió
  {date: '2023-10-20', count: 1}, // Asistió
  {date: '2023-10-23', count: 1}, // Asistió
  {date: '2023-10-24', count: 1}, // Asistió
  {date: '2023-10-25', count: 1}, // Asistió
  {date: '2023-10-26', count: 1}, // Asistió
  {date: '2023-10-27', count: 1}, // Asistió
  {date: '2023-10-30', count: 1}, // Asistió
  {date: '2023-10-31', count: 1}, // Asistió

  // Noviembre
  {date: '2023-11-01', count: 1}, // Asistió
  {date: '2023-11-02', count: 1}, // Asistió
  {date: '2023-11-03', count: 1}, // Asistió
  {date: '2023-11-06', count: 1}, // Asistió
  {date: '2023-11-07', count: 1}, // Asistió
  {date: '2023-11-08', count: 1}, // Asistió
  {date: '2023-11-09', count: 1}, // Asistió
  {date: '2023-11-10', count: 1}, // Asistió
  {date: '2023-11-13', count: 1}, // Asistió
  {date: '2023-11-14', count: 1}, // Asistió
  {date: '2023-11-15', count: 2}, // Tarde
  {date: '2023-11-16', count: 1}, // Asistió
  {date: '2023-11-17', count: 1}, // Asistió
  {date: '2023-11-20', count: 1}, // Asistió
  {date: '2023-11-21', count: 1}, // Asistió
  {date: '2023-11-22', count: 1}, // Asistió
  {date: '2023-11-23', count: 1}, // Asistió
  {date: '2023-11-24', count: 1}, // Asistió
  {date: '2023-11-27', count: 1}, // Asistió
  {date: '2023-11-28', count: 1}, // Asistió
  {date: '2023-11-29', count: 1}, // Asistió
  {date: '2023-11-30', count: 1}, // Asistió
];

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  useShadowColorFromDataset: false,
  propsForLabels: {
    fontFamily: 'Lexend-Regular',
  },
};

// 1 = Asistio = #22c55e
// 2 = Tarde = #eab308
// 3 = Falto = #ef4444
// 5 = Justificado = #3b82f6

export const ChartAttendance = () => {
  function getTooltipDataAttrs(
    value: ContributionChartValue,
  ): Partial<RectProps> {
    return {
      rx: 4,
      ry: 4,
      fill:
        value.count === 1
          ? '#22c55e'
          : value.count === 2
          ? '#eab308'
          : value.count === 3
          ? '#ef4444'
          : value.count === 4
          ? '#3b82f6'
          : '#f3f4f6',
    };
  }

  function getMonthLabel(monthIndex: number) {
    const months = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    return months[monthIndex];
  }
  return (
    <ScrollView
      horizontal
      style={{marginTop: 20}}
      showsHorizontalScrollIndicator={false}>
      <ContributionGraph
        values={attendanceData}
        fromNumber={0}
        endDate={new Date('2023-12-25')}
        numDays={365}
        width={1230}
        height={210}
        chartConfig={chartConfig}
        tooltipDataAttrs={getTooltipDataAttrs}
        gutterSize={2}
        getMonthLabel={getMonthLabel}
        fromZero
        showMonthLabels
        showOutOfRangeDays
      />
    </ScrollView>
  );
};
