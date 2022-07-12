import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from './src/themes/AppColors';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

function addZero(number) {
  if (number <= 9) {
    return '0' + number;
  }
  return number;
}

function url(daysQtt) {
  const date = new Date();
  const listLastDays = daysQtt;

  const endDate = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1,
  )}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const startDate = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1,
  )}-${addZero(date.getDate())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map(key => {
    return {
      date: key.split('-').reverse().join('/'),
      value: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseGraphic = await fetch(url);
  let returnApiGraphic = await responseGraphic.json();
  let selectListQuotationsGraphic = returnApiGraphic.bpi;
  const queryCoinsList = Object.keys(selectListQuotationsGraphic).map(key => {
    return selectListQuotationsGraphic[key];
  });
  let dataGraphic = queryCoinsList;
  return dataGraphic;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateDate, setUpdateDate] = useState(true);

  function updateDay(number) {
    setDays(number);
    setUpdateDate(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then(date => {
      setCoinsList(date);
    });
    getPriceCoinsGraphic(url(days)).then(dateGraphic => {
      setCoinsGraphicList(dateGraphic);
    });
    if (updateDate) {
      setUpdateDate(false);
    }
  }, [updateDate]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={AppColors.background}
        barStyle="light-content"
      />
      <CurrentPrice />
      <HistoryGraphic infoDataGraphic={coinsGraphicList} />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
