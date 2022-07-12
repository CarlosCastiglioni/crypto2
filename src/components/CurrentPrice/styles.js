import {StyleSheet} from 'react-native';
import {AppColors} from '../../themes/AppColors';

const styles = StyleSheet.create({
  headerPrice: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 10,
  },
  currentPrice: {
    color: AppColors.red,
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  textPrice: {
    color: AppColors.white,
    opacity: 0.5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
