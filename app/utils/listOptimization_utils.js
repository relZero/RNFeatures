'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

/**
 * 初步开始
 */
class ListOptimization extends React.Component {
    static defaultProps = {
        show: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            loadText: "",
            list: [],
        };
        this.pageIndex = -1;
        this.loading = false;
    }

    render() {
        return <FlatList ref="flatlist"
            data={this.state.list}
            style={{flex: 1, backgroundColor: "#f2f2f2"}}
            refreshing={this.state.refreshing}
            numColumns={1}
            onRefresh={() => this.refresh()}
            onEndReached={() => this.next()}
            renderItem={({item, index}) => <View onLayout={e => this.setLayout(e, index)}>{this.renderItem(item, index)}</View>}
            extraData={this.state}
            keyExtractor={item => item.index}
            onScroll={(e) => this._onScroll(e.nativeEvent)}
            scrollEventThrottle={10}
            initialNumToRender={2}
            ListHeaderComponent={this.header()}
            ListEmptyComponent={this.empty()}
            ListFooterComponent={this.footer()}
        />
    }

    componentWillMount() {
        if (this.props.show) this.next();
    }

    componentWillReceiveProps(pp) {
        if (pp.show != this.props.show && pp.show) this.next();
    }

    pageIndex = -1;
    loading = false;
    /**
     * 要替换的图片值:可继承
     */
    imgKey = "image";
    /**
     * 可继承,最小长度,将显示底部信息
     */
    minCount = 10;
    /**
     * 记录所有项的高度
     */
    layout = [];
    /**
     * 刷新页面的定时器
     */
    timer = null;

    refresh() {
        this.pageIndex = -1;
        this.loading = false;
        this.setState({list: []});
        this.next();
    }

    async next() {
        if (this.loading) return;
        this.loading = true;
        this.pageIndex++;
        this.setState({loadText: "加载中..."});
        let data = await this.load(this.pageIndex);
        if (!data || data.items.length == 0) {
            if (this.state.list.length > this.minCount) this.setState({loadText: "已经到底了"});
            if (this.state.list.length <= this.minCount) this.setState({loadText: ""});
            return;
        }
        data.items.forEach((item, index) => {
            item.index = item.sku + this.pageIndex;
            item.show = false;
        });
        this.setState({list: this.state.list.concat(data.items)});
        this.loading = false;
        if (this.pageIndex == 0) this.showImage(0);
    }

    header() {
        return null;
    }

    footer() {
        return <View style={listStyle.loading}>
            <Text>{this.state.loadText}</Text>
        </View>;
    }

    empty() {
        return <View style={listStyle.empty}>
            <Text style={listStyle.emptyTxt}>暂无该项</Text>
        </View>;
    }

    setLayout(e, index) {
        this.layout[index] = e.nativeEvent.layout.height;
    }

    _onScroll(e) {
        const y = e.contentOffset.y;
        let index = 0;
        let curr = 0;
        while (y > curr) {
            if (!this.layout[index]) break;
            curr += this.layout[index];
            index++;
        }
        // console.log("当前第" + index + "行");
        this.showImage(index);
    }

    showImage(index) {
        if (this.timer) return;
        this.timer = setTimeout(() => {
            console.log("延迟显示:当前第" + index + "行");
            let list = this.state.list.filter((item, i) => {
                item.show = i >= index - 2 && i < index + 5;
                return item;
            });
            this.setState({list});
            if (this.timer) clearTimeout(this.timer);
            this.timer = null;
        }, 200)
    }

    /**
     * 可继承,渲染子项目
     */
    renderItem(item, index) {
        return <View onLayout={e => this.setLayout(e, index)}></View>
    }

    /**
     * 可继承,加载数据
     */
    async load() {
    }
}

const listStyle = StyleSheet.create({
    empty: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyTxt: {
        color: "#ccc",
    },
    loading: {
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ListOptimization