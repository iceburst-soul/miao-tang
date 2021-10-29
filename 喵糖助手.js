/*  笔记心得：
    1.已知一个控件，定位该层控件中的其它控件：查找已知控件的父控件，根据indexInparent属性定位其它控件
    2.通过break中断函数，进行下一个函数
    3.主函数中通过if判断复选框是否选中，选中执行
*/
// ============必要声明============
"ui";
auto();
importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField.setAccessible(true);
    configField.set(bridge, configField.getType().newInstance());
    bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
        filter: function (info) {
            return true;
        }
    }));
// ============功能函数============
function back_upper() {
    while(text('邀请好友为我助力').findOnce == null) {
        back();
        sleep(1000);
    }
}
function sign_in(){i
    if (text('完成签到').exists()) {
       var si =  text('完成签到').findOne().parent().parent().parent().child(1);
        if (si.texit() == '去完成') {
            si.climck();
            console.log('签到完成');
        } else {
            console.log('无需执行签到');
        }
    } else {
        console.log('无需执行签到')
    }

}
function browse_mainVenue(){
    if (text('逛逛天猫主会场(0/1)').exists()) {
       var bm =  text('逛逛天猫主会场(0/1)').findOne().parent().parent().child(1);
        if (bm.text() == '去完成') {
            bm.click();
            sleep(20000);
            console.log('主会场浏览完成');
            back_upper();
        } else {
            console.log('无需执行签到');
        }
    } else {
        console.log('无需浏览主会场')
    }
}
function browse_10times(){
    while (text('去浏览').findOne(50000)) {
        text('去浏览').findOne(2000).click();
        if (textStartsWith('任务已完成').findOne(35000)) {
            back();
        } else {
            back();
        }
    }
    console.log('浏览10次任务已完成')

function main(){
    text('赚糖领红包').findOne().click();
    sleep(1500);
}
// ============UI布局============
ui.layout(
<vertical padding = "16">
    <text>使用说明：打开淘宝进入“双11喵糖总动员”后运行本应用</text>
    <button id = "ok" text = "启动" marginTop = "50" />
</vertical>
);
ui.ok.on("click",() => {
    app.launchApp("淘宝");
    console.show();
    main();
});
