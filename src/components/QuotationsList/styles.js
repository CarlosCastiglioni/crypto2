import {StyleSheet} from 'react-native';
import {AppColors} from '../../themes/AppColors';

const styles = StyleSheet.create({
  filters: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  buttonQuery: {
    width: 50,
    height: 30,
    backgroundColor: AppColors.red,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonQuery: {
    color: AppColors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  listQuotationBitcoins: {
    paddingTop: 10,
    width: '100%',
  },
  historyTitle: {
    alignSelf: 'flex-start',
    color: AppColors.white,
    opacity: 0.5,
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 30,
  },
});

export default styles;
