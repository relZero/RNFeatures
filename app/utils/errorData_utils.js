/**
 * lsErrorStack
 * @param e
 * @returns {{line: *, column: *}}
 */

import React from 'react';

export function ErrorHandler(e, isFatal) {
    /*if (Platform.OS === 'ios') {
        CrashHandler.originalHandler(arguments);
    } else {
        setTimeout(() => {
            CrashHandler.originalHandler(arguments);
        }, 300);
    }*/
    console.log(e, isFatal);
    __DEV__ && throwErrorToNative();
    //return e;
    lsErrorStack(e);
}

function lsErrorStack(e) {
    if (!e || !e instanceof Error || !e.stack) return {};
    try {
        const stack = e.stack.toString().split(/\r\n|\n/), frameRE = /:(\d+:\d+)[^\d]*$/;

        while (stack.length) {
            const frame = frameRE.exec(stack.shift());
            if (frame) {
                const position = frame[1].split(':');
                return {line: position[0], column: position[1]};
            }
        }
    } catch (e) {
        return {};
    }
}