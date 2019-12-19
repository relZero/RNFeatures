import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
} from 'react-native';
//自定义功能
import DensityUtils from "../../utils/density_utils";
import ListOptimization from "../../utils/listOptimization_utils";
import ListItem from "../../utils/listItem_utils";
const deviceWidth = Dimensions.get('window').width;
const img = require("./default_img");


class CusItem extends ListItem {
    render() {
        const {item} = this.props;
        return <View style={itemStyle.box}>
            <Image style={itemStyle.img} source={{ uri: item.show ? item.image : img }} />
        </View>
    }
}

class PicList extends ListOptimization {
    /**
     * 自定义初始化方法
     */
    init() {
        console.log("初始化完成")
    }
    /**
     * 自定义加载远程数据
     * 返回data.currPageNo  当前页
     * 返回data.items       列表
     * 返回data.totalPages  总页数
     * 返回data.totalCount  总个数
     * 返回data.startIndex  页序号
     */
    async load(pageIndex) {
        console.log("加载数据");
        try {
            let res = await fetch("https://dalingjia.com/xc_sale/goods/list.do?start=" + pageIndex);
            let data = await res.json();
            if (data.data) data = data.data;
            console.log(pageIndex, data);
            return data;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    renderItem(item, index) {
        return <CusItem show={item.show} item={item} />
    }
}

const itemStyle = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        marginBottom: DensityUtils.scaleSize(20),
        height: DensityUtils.scaleSize(500),
    },
    img: {
        width: deviceWidth, height: DensityUtils.scaleSize(400),
    },
    tit: {
        fontSize: DensityUtils.scaleSize(32),
        marginTop: DensityUtils.scaleSize(10),
        marginBottom: DensityUtils.scaleSize(10),
    },
    txt: {
        fontSize: DensityUtils.scaleSize(24),
        marginTop: DensityUtils.scaleSize(10),
        marginBottom: DensityUtils.scaleSize(10),
    }
})

export default PicList;