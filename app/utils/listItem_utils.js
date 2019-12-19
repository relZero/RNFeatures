'use strict';

import React from 'react';

/**
 * 基本的列表内容项
 * 高度最好是整数
 * props show<bool> 是否显示
 */
export default class extends React.Component {
    shouldUpdate = true;
    shouldComponentUpdate() {
        if (!this.shouldUpdate) return false;
        return !(this.shouldUpdate = false);
    }
    componentWillReceiveProps(pp) {
        if (pp.show != this.props.show) this.shouldUpdate = true;
    }
}