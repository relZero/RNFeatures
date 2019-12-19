import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";
//自定义功能
import DensityUtils from "./density_utils";
//公用样式
import CommonLayout from "../style/CommonLayout_style";

class MenuList extends React.Component {
    render() {
        let menuPropsArr = [];
        let menuPropsWord = this.props.menuword;
        let menuPropsNavigator = this.props.menunavigator;
        for (let i = 0; i < menuPropsWord.length; i++) {
            let memuWordData = menuPropsWord[i];
            let memuNavigatorData = menuPropsNavigator[i];
            menuPropsArr.push({
                key: i,
                menuWord: memuWordData,
                menuNavigator: memuNavigatorData
            })
        }
        return (
            <FlatList style={styles.appMenuBox}
                data={menuPropsArr}
                renderItem={({item}) =>
                    <TouchableOpacity style={[styles.appMenuList, CommonLayout.itemCenter]} underlayColor={'transparent'} onPress={() => this.props.navigation.navigate(item.menuNavigator)}><Text>{item.menuWord}</Text></TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

const styles = StyleSheet.create({
    appMenuBox: {
        padding: DensityUtils.scaleSize(30),
    },
    appMenuList: {
        marginTop: DensityUtils.scaleSize(10),
        marginBottom: DensityUtils.scaleSize(10),
        height: DensityUtils.scaleSize(80),
        backgroundColor: '#fff',
    }
});

export default MenuList;