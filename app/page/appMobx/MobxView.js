import React from "react";
import {observer} from "mobx-react";
import {View, Text} from "react-native";
import MobxState from './MobxState'

const MobxViewInit = observer(class MobxView extends React.Component {
    render() {
        return (
            <View>
                <Text>当前的数是：{MobxState.clickTimer.timeDefaule + "," + MobxState.clickTimer.timeDoubel}</Text>
            </View>
        );
    }
});
export default MobxViewInit;