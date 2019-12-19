import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
    Image,
    TouchableOpacity,
} from 'react-native';
//外部功能
import LargeList from "react-native-largelist";
//自定义功能
import DensityUtils from "../../utils/density_utils";
//公用样式
import CommonLayout from "../../style/CommonLayout_style";
import CommonValue from "../../style/CommonValue_style";

let RoomRulePic = {
    MalePic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJbSURBVDhPlZTZS9RRFMfnX+ghyowwoihSWx56qJcKwggqCqIFqsd6iCAMghYqgpbHoH2zsqlotTQ0nDRTaSGkQkqihVErpk0cJa863k/fO7+rTepYfuFy+d17zrnnfL/n/ELWWvO/qzthTazdmsZWa5rj1jS5Xaut05oQw8CXdthcAYtuwoq7sKQIlt+BqiYYVqBoXI5ynnwOpl2ESWdhagEUf0gTKGGhLgb3P0IkCg0//IVQ9A7mXYMZCjRda1YYSmX3VyD5E34DK4thil4aeQwyjsPMQthSGTgcegbZusu9oKx07vaS9ymB2rtgezVknYLRcnYvLb4NeeIjW8ZjTshRe66yyLsB+58Gd7nnoay3tB6lsrsWMmWcI+O9j+Hl14Dc5raAzI0RcSNOxp+GAwriUPsJ7imIs0sGqmwM0ndGh+uSNgPQYgLFnM0qld6mClIRctlsexTwsb4Uunr8zSBo+AkLVc6EM3DrrT/0CLV2BuRmqKzC1/50CORX6dGjsLPGH3iEXH1LRepE1V8mVf6FfU9gxBGV+cAfeITiymh1SSBzQb0/HQL5aoNRomGPBElFkuxdStNJvkYBHWfpUP8dFlwPOCpW76QiGai6WV0q2bOkyEEvbX/EfsGG8qCflmm+4v1V83uydzJPqlfUtVsfwgv10Wfx5+arQmOyVoqOU7O6+3J990dfoI4E7FBTOtJdmW6fr5macwXG6gGXiev2S2mU7QvUi7AM1+n12ZeDyc7RCMy9CpukUo06OR0G/bG1dFjzPGZNJGpNZaM1r75Z09E90O7PsuY3HNaI5Y75bv4AAAAASUVORK5CYII=",
    FemalePic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIdSURBVDhPfZNJSFdRFMbfqratSgsKGlxENBG0ahVRQYJBNECbNhGFUUSBLopGS3FsokGaI6I5TWhRmQ1kNFFoQWEUZZmZZmr+9d+v77x74fWf+uBx3z33fPcM37kB6dDVB63d0NnrDalIJDa0QGEdLD4NC47BolNuf++9d4gQEUvvwrRKGLENxhfD1AqYoHW49lP0X3zHOzo44v6HMGonjNsDa65ATTM8+wx1r2H9dXdR9g6obAjdDQGNH2BSKUzUV3Xfm5Nw6BFMLncZ1L8LTQGbapXOVsi/CgN/QmNabJSflZGvjISAJWdcmhdehoaMqFX6Y4pg4UnoiYlonRu9C26onv/h1lsYuxtyj0NHr4grzrvO7XvgPTKguhFGqkHLzsJgXMSD6qgZ5lfDm2/eKwktHZB3ArK2Q5nrbECnpsQEt8JtffwR+gfDQ2JxeCFZlp9zpFwNRXtPeOR0bPoC8xTRDq3tKy/Clpuw6hJMl/hZunT2YXjyKXQ3RJPT3AYFGq+ZeyGnxOlqus2oclK8+uodHRJn1dCnNNdKU+u0Rf752x8kIiIOqB6L+rwV1l1z47f6MjxVek2KFvN1e0REu3mphmFIgUawDGYdUL1ahxa6jrYnPrGIqGmgpN7pNPeomqKXMueILtO+6HZKyhExrjm1B/xD34YaGLbZpfpdkbpEsvN/kNocQ4VEtvdoGWRAemK3IrT90trvDcmAv4X65AWYKcpPAAAAAElFTkSuQmCC"
};

export default class extends Component {

    constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        // this.loadMore();
    }

    render() {
        return (
            <View style={styles.PersonalListBox}>
                <LargeList
                    renderSection={this.renderRow}
                    renderHeader={this.renderHeader}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View>
                <Text>
                    111111111111111
                </Text>
            </View>
        );
    }

    renderRow() {
        return (
            <View style={styles.ListItem}>
                <View style={styles.GameName}>
                    <View style={styles.GameNameL}>
                        <Image style={styles.ListGamePic} source={{uri: 'http://placehold.it/30x30/ccc/fff'}}/>
                        <Text style={styles.ListGameText}>王者荣耀</Text>
                    </View>
                    <View style={styles.GameNameR}>
                        <Text style={styles.ListGameTime}>刚刚</Text>
                    </View>
                </View>
                <View style={styles.GamePeople}>
                    <View style={styles.GamePeopleL}>
                        <Image style={styles.ListHeadPic} source={{uri: 'http://placehold.it/103x103/ccc/fff'}}/>
                        <View style={styles.ListRoomRule}>
                            <Text style={styles.ListRoomTitle}>犬夜叉新人专享礼包</Text>
                            <View style={styles.ListRuleNum}>
                                <View style={styles.ListPeopleRule}>
                                    <Image style={styles.MalePic} source={{uri: RoomRulePic.MalePic}}/>
                                    <Text style={styles.ListRuleMale}>1人</Text>
                                </View>
                                <View style={styles.ListPeopleRule}>
                                    <Image style={styles.FemalePic} source={{uri: RoomRulePic.FemalePic}}/>
                                    <Text style={styles.ListRuleFemale}>2人</Text>
                                </View>
                                <Text style={styles.ListRulePeople}>3/5</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.PersonalBtn, CommonLayout.itemCenter]} underlayColor={'transparent'}>
                        <Text style={styles.BtnWord}>加入</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderFooter() {
        if (this.state.nomore) {
            return null;
        }
        return (
            <View style={{height: 50, marginTop: 20}}>
                <ActivityIndicator/>
            </View>
        );
    }

    loadMore() {
        this.dataSource.push({
            id: 0,
            title: `begin to create data ...`,
        });
        for (let i = 0; i < 5; i++) {
            this.dataSource.push({
                id: i + 1,
                title: `this is ${i}`,
            })
        }
        this.dataSource.push({
            id: 6,
            title: `finish create data ...`,
        });
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    PersonalListBox: {
        paddingLeft: DensityUtils.scaleSize(30),
        backgroundColor: "#fff",
        flex: 1,
    },
    PersonalFlatList: {
        height: "100%",
    },
    ListItem: {
        paddingTop: DensityUtils.scaleSize(15),
        paddingRight: DensityUtils.scaleSize(30),
        borderBottomColor: "#f3f3f3",
        borderStyle: "solid",
        borderBottomWidth: DensityUtils.scaleSize(1),
    },
    ListGamePic: {
        borderRadius: DensityUtils.scaleSize(3),
        width: DensityUtils.scaleSize(30),
        height: DensityUtils.scaleSize(30),
    },
    ListHeadPic: {
        borderRadius: DensityUtils.scaleSize(52),
        width: DensityUtils.scaleSize(103),
        height: DensityUtils.scaleSize(103),
    },
    GameName: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    GameNameL: {
        flexDirection: "row",
    },
    ListGameTime: {
        color: "#d7d7d7",
        fontSize: DensityUtils.scaleSize(20),
    },
    ListGameText: {
        color: "#000",
        paddingLeft: DensityUtils.scaleSize(8),
        fontSize: DensityUtils.scaleSize(20),
        height: DensityUtils.scaleSize(30),
        lineHeight: DensityUtils.scaleSize(30),
    },
    GamePeople: {
        paddingTop: DensityUtils.scaleSize(22),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    GamePeopleL: {
        flexDirection: "row",
    },
    ListRoomRule: {
        paddingTop: DensityUtils.scaleSize(12),
        paddingLeft: DensityUtils.scaleSize(30),
        paddingBottom: DensityUtils.scaleSize(26),
    },
    ListRuleNum: {
        paddingTop: DensityUtils.scaleSize(15),
        flexDirection: "row",
    },
    ListRoomTitle: {
        color: "#000",
    },
    ListPeopleRule: {
        paddingTop: DensityUtils.scaleSize(3),
        flexDirection: "row",
        paddingRight: DensityUtils.scaleSize(20),
    },
    MalePic: {
        width: DensityUtils.scaleSize(18),
        height: DensityUtils.scaleSize(18),
    },
    FemalePic: {
        width: DensityUtils.scaleSize(14),
        height: DensityUtils.scaleSize(20),
    },
    ListRuleMale: {
        paddingLeft: DensityUtils.scaleSize(10),
        color: "#000",
        fontSize: DensityUtils.scaleSize(20),
        lineHeight: DensityUtils.scaleSize(21),
    },
    ListRuleFemale: {
        paddingLeft: DensityUtils.scaleSize(10),
        color: "#000",
        fontSize: DensityUtils.scaleSize(20),
        lineHeight: DensityUtils.scaleSize(21),
    },
    ListRulePeople: {
        width: DensityUtils.scaleSize(48),
        height: DensityUtils.scaleSize(26),
        lineHeight: DensityUtils.scaleSize(26),
        fontSize: DensityUtils.scaleSize(16),
        backgroundColor: "#f1f1f1",
        textAlign: "center",
        borderRadius: DensityUtils.scaleSize(13),
    },
    PersonalBtn: {
        marginTop: DensityUtils.scaleSize(20),
        width: DensityUtils.scaleSize(103),
        height: DensityUtils.scaleSize(52),
        borderColor: "#3241ff",
        borderStyle: "solid",
        borderWidth: DensityUtils.scaleSize(2),
        borderRadius: DensityUtils.scaleSize(26),
    },
    BtnWord: {
        color: "#3241ff",
    }
});