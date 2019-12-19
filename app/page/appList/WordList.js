import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
//自定义功能
import DensityUtils from "../../utils/density_utils";
import ListOptimization from "../../utils/listOptimization_utils";

class PicList extends ListOptimization {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            PersonalListData: "",
        };
    }

    componentWillMount() {
        this.next("111");
    }

    renderItem(item, index) {
        return (
            <View style={styles.ListItem}>
                <Text>文字文字文字文字文字文字文字文字文字文字文字</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.PersonalListBox}>
                {/*<AppTab style={PersonalListNav}>
                    </AppTab>*/}
                <FlatList
                    style={styles.PersonalFlatList}
                    data={this.state.PersonalListData}
                    refreshing={this.state.refreshing}
                    onRefresh={() => this.refresh()}
                    onEndReached={() => this.next("222")}
                    onEndReachedThreshold={10}
                    /*onScroll={(e) => this._onScroll(e.nativeEvent)}*/
                    renderItem={({item, index}) => this.renderItem(item, index)}
                    extraData={this.state}
                    keyExtractor={item => item.index}
                    initialNumToRender={10}
                    ListEmptyComponent={this.empty()}
                    /*ListFooterComponent={this.footer()}*/
                />
            </View>
        )
    };

}

const styles = StyleSheet.create({
    ListItem: {
        height: DensityUtils.scaleSize(80),
        paddingLeft: DensityUtils.scaleSize(30),
        paddingRight: DensityUtils.scaleSize(30),
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomColor: "#f3f3f3",
        borderStyle: "solid",
        borderBottomWidth: DensityUtils.scaleSize(1),
    }
});

export default PicList;