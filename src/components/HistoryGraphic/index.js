import React from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {AppColors} from '../../themes/AppColors';
import styles from './styles';

export default function HistoryGraphic(props) {
  return (
    <View>
      <LineChart
        style={styles.graph}
        data={{
          datasets: [
            {
              data: props.infoDataGraphic,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={250}
        yAxisLabel="$"
        yAxisSuffix="k"
        withVerticalLines={false}
        yLabelsOffset={10}
        withVerticalLabels={false}
        withHorizontalLines={false}
        chartConfig={{
          backgroundColor: AppColors.background,
          backgroundGradientFrom: AppColors.background,
          backgroundGradientTo: AppColors.backgroundList,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '1',
            strokeWidth: '0.5',
            stroke: AppColors.white,
          },
        }}
        bezier //ondas suaves do grafico
      />
    </View>
  );
}
