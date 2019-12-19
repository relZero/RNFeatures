import React from 'react';
//外部组件
import {createStackNavigator} from "react-navigation";
//自定义组件
import MenuList from "../../utils/menuList_utils";
//自定义组件
import MobxAll from '../appMobx/MobxAll';
import MobxView from '../appMobx/MobxView';
import MobxOne from '../appMobx/MobxOne';

class AppMobx extends React.Component {
    render() {
        return (
            <MenuList
                menuword={['全局操作数据', '数据同步展示', '单个数据操作']}
                menunavigator={['MobxAll', 'MobxView', 'MobxOne']}
                navigation={this.props.navigation}
            />
        );
    }

}

const ListNavigator = createStackNavigator({
    Home: {
        screen: AppMobx,
        navigationOptions: {
            headerTitle: "数据同步",
        }
    },
    MobxAll: {
        screen: MobxAll,
        navigationOptions: {
            headerTitle: "全局操作数据",
        }
    },
    MobxView: {
        screen: MobxView,
        navigationOptions: {
            headerTitle: "数据同步展示",
        }
    },
    MobxOne: {
        screen: MobxOne,
        navigationOptions: {
            headerTitle: "单个数据操作",
        }
    }
});

export default ListNavigator;