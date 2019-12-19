import {StyleSheet} from 'react-native';
//自定义组件
import DensityUtils from '../utils/density_utils';
import CommonValue from '../style/CommonValue_style';

const commonStyles = StyleSheet.create({
    boxOuter:{
        padding: DensityUtils.scaleSize(30),
        backgroundColor: '#fff',
        marginBottom: DensityUtils.scaleSize(30),
    },
    boxOuterNoPadding:{
        backgroundColor: '#fff',
        marginBottom: DensityUtils.scaleSize(30),
    },
    itemCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle1: {
        paddingLeft: DensityUtils.scaleSize(30),
        height: DensityUtils.scaleSize(80),
        lineHeight: DensityUtils.scaleSize(80),
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        fontWeight: 'bold',
        fontSize: CommonValue.fontSizeM,
    },
});

export default commonStyles;