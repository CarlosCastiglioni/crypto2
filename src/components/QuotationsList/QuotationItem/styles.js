import {StyleSheet} from 'react-native';
import {AppColors} from '../../../themes/AppColors';

const styles = StyleSheet.create({
  mainContent: {
    width: '95%',
    height: 'auto',
    backgroundColor: AppColors.backgroundList,
    marginLeft: '3%',
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  contextLeft: {
    width: '36%',
    alignItems: 'flex-start',
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 6,
    marginRight: 6,
  },
  dayQuotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: AppColors.white,
    opacity: 0.5,
    fontWeight: 'bold',
  },
  contextRigth: {
    width: '60%',
    alignItems: 'flex-end',
  },
  price: {
    color: AppColors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
