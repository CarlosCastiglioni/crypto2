import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function QuotationItem(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require('../../../img/bitcoin.png')}
          />
          <Text style={styles.dayQuotation}>{props.date}</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>{props.value}</Text>
      </View>
    </View>
  );
}
