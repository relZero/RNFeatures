import {action, observable, useStrict} from "mobx";
import {extendObservable} from "mobx";
class MobxState {
    constructor() {
        let that = this;
        extendObservable(this, {
            timer: {
                timeDefaule: 1,
                timeDoubel: 2
            },
            get clickTimer() {
              return that.timer;
            },
            addTimers: action(() => {
                that.timer.timeDefaule += 1
            }),
            addDoubelTimers: action(() => {
                that.timer.timeDoubel = that.timer.timeDoubel * 2
            }),
            resetTimer: action(() => {
                that.timer.timeDefaule = 1;
                that.timer.timeDoubel = 2;
            })
        })
    }
}
export default new MobxState()