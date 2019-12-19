import React from 'react';
import {Platform} from 'react-native';
//外部功能
import {createStackNavigator} from 'react-navigation';
//自定义功能
import MenuList from '../../utils/menuList_utils';
/*import {ErrorHandler} from '../../utils/errorData_utils';*/
//自定义组件
import Landscape from './Landscape'
import Portrait from './Portrait';
import Complex from './Complex';

class AppLayout extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            throw new Error("错误测试错误测试错误测试错误测试错误测试");
        }, 10000);
    }

    render() {
        return (
            <MenuList
                menuword={['横向布局', '纵向布局', '复合布局']}
                menunavigator={['Landscape', 'Portrait', 'Complex']}
                navigation={this.props.navigation}
            />
        );
    }
}

function ErrorHandler(e, isFatal) {
    if (Platform.OS === 'ios') {
        CrashHandler.originalHandler(arguments);
    } else {
        setTimeout(() => {
            CrashHandler.originalHandler(arguments);
        }, 300);
    }
    console.log(e, isFatal);
    __DEV__ && throwErrorToNative();
    //return e;
    Report.send(e);
}

var ErrorUtils = require('ErrorUtils');
ErrorUtils.setGlobalHandler(ErrorHandler);
//const originalHandler = global.ErrorUtils.getGlobalHandler();
//global.ErrorUtils.setGlobalHandler(ErrorHandler);

function lsErrorStack(e) {
    console.log(11111);
    if (!e || !e instanceof Error || !e.stack) return {};
    try {
        const stack = e.stack.toString().split(/\r\n|\n/), frameRE = /:(\d+:\d+)[^\d]*$/;

        while (stack.length) {
            const frame = frameRE.exec(stack.shift());
            if (frame) {
                const position = frame[1].split(':');
                return {line: position[0], column: position[1]};
            }
        }
    } catch (e) {
        return {};
    }
}

if (!__DEV__) {
    require('promise/setimmediate/rejection-tracking').enable({
        allRejections: true,
        onUnhandled: (id, error) => {
            this.onUnhandled(id, error);
        },
        onHandled: (id) => {
            this.onHandled(id);
        }
    })
}

const LayoutNavigator = createStackNavigator({
    Home: {
        screen: AppLayout,
        navigationOptions: {
            headerTitle: '布局',
        }
    },
    Landscape: {
        screen: Landscape,
        navigationOptions: {
            headerTitle: '横向布局',
        }
    },
    Portrait: {
        screen: Portrait,
        navigationOptions: {
            headerTitle: '纵向布局',
        }
    },
    Complex: {
        screen: Complex,
        navigationOptions: {
            headerTitle: '复合布局',
        }
    }
});

export default LayoutNavigator;