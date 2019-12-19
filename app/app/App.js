/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';

import {createBottomTabNavigator} from 'react-navigation';

import AppList from '../page/appList/AppList';
import AppLayout from '../page/appLayout/AppLayout';
import AppMobx from '../page/appMobx/AppMobx';

const AppBottomTabNavigator = createBottomTabNavigator({
    AppLayout: {
        screen: AppLayout,
        navigationOptions: {
            tabBarLabel: '布局',
        }
    },
    AppList: {
        screen: AppList,
        navigationOptions: {
            tabBarLabel: '列表',
        }
    },
    AppMobx: {
        screen: AppMobx,
        navigationOptions: {
            tabBarLabel: '数据共享',
        }
    }
});

export default AppBottomTabNavigator
