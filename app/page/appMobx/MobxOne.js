import React from "react";
import {observer} from "mobx-react";
import {View, Text, Button} from "react-native";
import MobxState from './MobxState'

const MobxOneInit = observer(class MobxOne extends React.Component {
    render() {
        return (
            <View>
                <Text>当前的数是：{MobxState.clickTimer.timeDefaule + "," + MobxState.clickTimer.timeDoubel}</Text>
                <Button
                    onPress={() => MobxState.addTimers()}
                    title='add'
                />
            </View>
        );
    }
});
export default MobxOneInit;