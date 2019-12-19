package com.rnfeatures;


import android.util.Log;

import java.lang.Thread.UncaughtExceptionHandler;


/**
 * 应用程序异常处理类：用于捕获异常和提示错误信息
 *
 * @author 黄宏东
 * @version 1.0
 * @created 2015-5-1
 */
public class AppCrashHandler implements UncaughtExceptionHandler {
    public static final String TAG = "CrashHandler";
    private static final String RETURN = "\r\n";
    private static AppCrashHandler instance;
    private UncaughtExceptionHandler mDefaultHandler;

    private AppCrashHandler() {
        init();
    }

    public static AppCrashHandler getInstance() {
        if (instance == null) {
            instance = new AppCrashHandler();
        }
        return instance;
    }

    private void init() {
        mDefaultHandler = Thread.getDefaultUncaughtExceptionHandler();
        Thread.setDefaultUncaughtExceptionHandler(this);
    }

    @Override
    public void uncaughtException(Thread thread, Throwable ex) {

        Log.e(TAG, "程序出错啦。。。。。。。。。。", ex);

        if (!handleException(ex) && mDefaultHandler != null) {
            mDefaultHandler.uncaughtException(thread, ex);
        }
    }

    /**
     * 自定义错误处理,收集错误信息 发送错误报告等操作均在此完成.
     *
     * @param ex
     * @return true:如果处理了该异常信息;否则返回false
     */
    private boolean handleException(Throwable ex) {
        if (ex == null) {
            return true;
        }

        // 错误信息
        // 这里还可以加上当前的系统版本，机型型号 等等信息
        StackTraceElement[] stackTrace = ex.getStackTrace();

        StringBuffer errorMsg = new StringBuffer();
        errorMsg.append(ex.getMessage() + "\n");
        for (int i = 0; i < stackTrace.length; i++) {
            errorMsg.append("文件名：").append(stackTrace[i].getFileName()).append(RETURN)
                    .append("类名：").append(stackTrace[i].getClassName())
                    .append(".").append(stackTrace[i].getMethodName()).append(RETURN)
                    .append("代码行数：").append(stackTrace[i].getLineNumber()).append(RETURN);
        }
        Log.i(TAG, errorMsg.toString());


        android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(10);
        return true;
    }
}