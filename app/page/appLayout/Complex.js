import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
//自定义功能
import DensityUtils from "../../utils/density_utils";
//公用样式
import CommonLayout from "../../style/CommonLayout_style";
import CommonValue from "../../style/CommonValue_style";

class Complex extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>先纵后横</Text>
                    <View style={styles.complexOuter}>
                        <View style={CommonLayout.rowBetween}>
                            <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                        </View>
                        <View style={CommonLayout.rowBetween}>
                            <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                            <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块2</Text>
                            </View>
                        </View>
                        <View style={CommonLayout.rowBetween}>
                            <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                            <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                            <View style={[styles.moddleBox3, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块2</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={CommonLayout.boxOuterNoPadding}>
                    <Text style={CommonLayout.titleStyle1}>先横后纵</Text>
                    <View style={[styles.complexOuter, CommonLayout.rowBetween]}>
                        <View style={styles.complexInner}>
                            <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                        </View>
                        <View style={styles.complexInner}>
                            <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                            <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块2</Text>
                            </View>
                        </View>
                        <View style={styles.complexInner}>
                            <View style={[styles.moddleBox1, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块1</Text>
                            </View>
                            <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块2</Text>
                            </View>
                            <View style={[styles.moddleBox2, CommonLayout.itemCenter]}>
                                <Text style={styles.boxText}>模块3</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    complexOuter: {
        padding: DensityUtils.scaleSize(15),
    },
    complexInner: {
        flex: 1,
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
    boxText: {
        color: CommonValue.lightColor,
    },
});

export default Complex;