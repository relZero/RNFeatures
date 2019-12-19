import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
//自定义功能
import DensityUtils from '../../utils/density_utils';
//公用样式
import CommonLayout from '../../style/CommonLayout_style';
import CommonValue from '../../style/CommonValue_style';

class Portrait extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>多模块</Text>
                    <View style={styles.portraitOuter}>
                        <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块1</Text>
                        </View>
                        <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                        <View style={[styles.moddleBox3, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块3</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>单模块</Text>
                    <View style={styles.portraitOuter}>
                        <View style={[styles.moddleBox3, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块1</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>图文混排</Text>
                    <View style={styles.portraitOuter}>
                        <Text style={styles.boxTitle}>标题标题标题标题标题标题标题</Text>
                        <Image style={styles.portraitImage} source={{uri: 'http://placehold.it/660x320/ccc/fff'}}/>
                        <Text style={styles.boxWord2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                        <Image style={styles.portraitImage} source={{uri: 'http://placehold.it/660x320/ccc/fff'}}/>
                        <Text style={styles.boxWord2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                        <Image style={styles.portraitImage} source={{uri: 'http://placehold.it/660x320/ccc/fff'}}/>
                        <Text style={styles.boxWord2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                        <Image style={styles.portraitImage} source={{uri: 'http://placehold.it/660x320/ccc/fff'}}/>
                        <Text style={styles.boxWord2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    portraitOuter: {
        padding: DensityUtils.scaleSize(15),
    },
    moddleBox1: {
        flex: 1,
        margin: DensityUtils.scaleSize(15),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#f55',
    },
    moddleBox2: {
        flex: 1,
        margin: DensityUtils.scaleSize(15),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#55f',
    },
    moddleBox3: {
        flex: 1,
        margin: DensityUtils.scaleSize(15),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#5f5',
    },
    portraitImage: {
        margin: DensityUtils.scaleSize(15),
        width: DensityUtils.scaleSize(660),
        height: DensityUtils.scaleSize(320),
    },
    boxTitle: {
        fontSize: CommonValue.fontSizeL,
        fontWeight: 'bold',
        margin: DensityUtils.scaleSize(15),
    },
    boxText: {
        color: CommonValue.lightColor,
    },
    boxWord2: {
        padding: DensityUtils.scaleSize(15),
        fontSize: CommonValue.fontSizeM,
        color: CommonValue.deepColor,
        lineHeight: DensityUtils.scaleSize(42),
    },
});

export default Portrait;