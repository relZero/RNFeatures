import React from "react";
import {observer} from "mobx-react";
import {View, Text, Button} from "react-native";
import MobxState from './MobxState'

const MobxAllInit = observer(class MobxAll extends React.Component {
    render() {
        return (
            <View>
                <Text>当前的数是：{MobxState.clickTimer.timeDefaule + "," + MobxState.clickTimer.timeDoubel}</Text>
                <Button
                    onPress={() => MobxState.addTimers()}
                    title='add'
                />
                <Button
                    onPress={() => MobxState.addDoubelTimers()}
                    title='doubleadd'
                />
                <Button
                    onPress={() => MobxState.resetTimer()}
                    title='reset'
                />
            </View>
        );
    }
});
export default MobxAllInit;