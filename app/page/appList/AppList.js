import React from 'react';
//外部组件
import {createStackNavigator} from 'react-navigation';
//自定义功能
import MenuList from '../../utils/menuList_utils';
//自定义组件
import WordList from '../appList/WordList';
import PicList from '../appList/PicList';
import WPList from '../appList/WPList';
import PullList from '../appList/PullList';
import LargeList from '../appList/LargeList';

class AppList extends React.Component {
    render() {
        return (
            <MenuList
                menuword={['文字列表', '图片列表', '图文列表', 'pullList组件', 'largeList组件']}
                menunavigator={['WordList', 'PicList', 'WPList', 'PullList', 'LargeList']}
                navigation={this.props.navigation}
            />
        );
    }

}

class WPListBox extends React.Component {
    render() {
        return (
            <WPList show={true}/>
        )
    }
}

class PicListBox extends React.Component {
    render() {
        return (
            <PicList show={true}/>
        )
    }
}

const ListNavigator = createStackNavigator({
    Home: {
        screen: AppList,
        navigationOptions: {
            headerTitle: "列表",
        }
    },
    WordList: {
        screen: WordList,
        navigationOptions: {
            headerTitle: '文字列表',
        }
    },
    PicList: {
        screen: PicListBox,
        navigationOptions: {
            headerTitle: '图片列表',
        }
    },
    WPList: {
        screen: WPListBox,
        navigationOptions: {
            headerTitle: '图文列表',
        }
    },
    PullList: {
        screen: PullList,
        navigationOptions: {
            headerTitle: 'pullList组件',
        }
    },
    LargeList: {
        screen: LargeList,
        navigationOptions: {
            headerTitle: 'largeList组件',
        }
    }
});

export default ListNavigator;