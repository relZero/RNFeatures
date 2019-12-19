import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
//自定义功能
import DensityUtils from "../../utils/density_utils";
//公用样式
import CommonLayout from "../../style/CommonLayout_style";
import CommonValue from "../../style/CommonValue_style";

class Landscape extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>等分2列</Text>
                    <View style={[styles.landscapeOuter, CommonLayout.rowBetween]}>
                        <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块1</Text>
                        </View>
                        <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>等分3列</Text>
                    <View style={[styles.landscapeOuter, CommonLayout.rowBetween]}>
                        <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块1</Text>
                        </View>
                        <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                        <View style={[styles.moddleBox3, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>自定义2列</Text>
                    <View style={[styles.landscapeOuter, CommonLayout.rowBetween]}>
                        <View style={[styles.moddleBoxL1, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块1</Text>
                        </View>
                        <View style={[styles.moddleBoxR1, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>自定义3列</Text>
                    <View style={[styles.landscapeOuter, CommonLayout.rowBetween]}>
                        <View style={[styles.moddleBoxL2, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块1</Text>
                        </View>
                        <View style={[styles.moddleBoxM2, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                        <View style={[styles.moddleBoxR2, CommonLayout.itemCenter]}>
                            <Text style={styles.boxText}>模块2</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>图文布局</Text>
                    <View style={[styles.landscapeImageOuter, CommonLayout.rowBetween]}>
                        <Image style={styles.landscapeImage} source={{uri: 'http://placehold.it/120x120/ccc/fff'}}/>
                        <View style={styles.landscapeWord1}>
                            <Text style={styles.boxTitle}>标题标题标题标题标题标题标题</Text>
                            <Text style={styles.boxText2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>图文布局带按钮1</Text>
                    <View style={[styles.landscapeImageOuter, CommonLayout.rowBetween]}>
                        <Image style={styles.landscapeImage} source={{uri: 'http://placehold.it/120x120/ccc/fff'}}/>
                        <View style={styles.landscapeWord2}>
                            <Text style={styles.boxTitle}>标题标题标题标题标题标题标题</Text>
                            <Text style={styles.boxText2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                        </View>
                        <TouchableOpacity style={[styles.landscapeBtn1, CommonLayout.itemCenter]} underlayColor={'transparent'}>
                            <Text style={styles.btnWord}>按钮</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>图文布局带按钮2</Text>
                    <View style={[styles.landscapeImageOuter, CommonLayout.rowBetween]}>
                        <Image style={styles.landscapeImage} source={{uri: 'http://placehold.it/120x120/ccc/fff'}}/>
                        <View style={styles.landscapeWord3}>
                            <Text style={styles.boxTitle}>标题标题标题标题标题标题标题</Text>
                            <Text style={styles.boxText2}>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</Text>
                        </View>
                        <TouchableOpacity style={[styles.landscapeBtn2, CommonLayout.itemCenter]} underlayColor={'transparent'}>
                            <Text style={styles.btnWord}>按钮</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    landscapeOuter: {
        padding: DensityUtils.scaleSize(15),
    },
    moddleBox1: {
        flex: 1,
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#f55',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBox2: {
        flex: 1,
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#55f',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBox3: {
        flex: 1,
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#5f5',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBoxL1: {
        width: DensityUtils.scaleSize(200),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#f55',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBoxR1: {
        width: DensityUtils.scaleSize(425),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#5f5',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBoxL2: {
        width: DensityUtils.scaleSize(100),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#f55',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBoxM2: {
        width: DensityUtils.scaleSize(395),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#f55',
        margin: DensityUtils.scaleSize(15),
    },
    moddleBoxR2: {
        width: DensityUtils.scaleSize(100),
        height: DensityUtils.scaleSize(300),
        backgroundColor: '#5f5',
        margin: DensityUtils.scaleSize(15),
    },
    landscapeImageOuter: {
        position: 'relative',
        margin: DensityUtils.scaleSize(30),
    },
    landscapeImage: {
        width: DensityUtils.scaleSize(120),
        height: DensityUtils.scaleSize(120),
    },
    landscapeWord1: {
        marginLeft: DensityUtils.scaleSize(30),
        width: DensityUtils.scaleSize(510),
    },
    landscapeWord2: {
        marginLeft: DensityUtils.scaleSize(30),
        width: DensityUtils.scaleSize(380),
    },
    landscapeWord3: {
        marginLeft: DensityUtils.scaleSize(30),
        width: DensityUtils.scaleSize(510),
        paddingRight: DensityUtils.scaleSize(130),
    },
    landscapeBtn1:{
        marginTop: DensityUtils.scaleSize(30),
        marginLeft: DensityUtils.scaleSize(30),
        width: DensityUtils.scaleSize(100),
        height: DensityUtils.scaleSize(50),
        borderRadius: DensityUtils.scaleSize(25),
        backgroundColor: '#f55',
    },
    landscapeBtn2:{
        position: 'absolute',
        top: '50%',
        right: 0,
        marginTop: -DensityUtils.scaleSize(25),
        width: DensityUtils.scaleSize(100),
        height: DensityUtils.scaleSize(50),
        borderRadius: DensityUtils.scaleSize(25),
        backgroundColor: '#f55',
    },
    boxTitle: {
        height: DensityUtils.scaleSize(42),
        lineHeight: DensityUtils.scaleSize(42),
        overflow: 'hidden',
        fontSize: CommonValue.fontSizeM,
        fontWeight: 'bold',
    },
    boxText: {
        color: CommonValue.lightColor,
    },
    boxText2: {
        height: DensityUtils.scaleSize(72),
        overflow: 'hidden',
        color: "#999",
        lineHeight: DensityUtils.scaleSize(36),
    },
    btnWord: {
        color: CommonValue.lightColor
    },
});

export default Landscape;