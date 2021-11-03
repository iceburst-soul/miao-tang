/*  笔记：
    1.已知一个控件，定位该层控件中的其它控件：查找已知控件的父控件，根据indexInparent属性定位其它控件
    2.通过break中断if函数，提前进行下一个函数
    3.主函数中通过if判断复选框是否选中，选中执行
*/
// ============必要声明============
"ui";
auto();
if (floaty && floaty.hasOwnProperty("checkPermission") && !floaty.checkPermission()) {
    floaty.requestPermission(); toast("请先开启悬浮窗权限再运行,否则无法显示提示"); exit()
}
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
//获取复选框状态=>把该函数赋值给变量=>变量.forEach=>在遍历中x.checked = !x.checked
function get_checkbox_list() {
    return [ui.ck_signIn, ui.ck_mainVenue, ui.ck_browse10, ui.ck_getMoney, ui.ck_rest, ui.ck_ant];
}
//返回函数
function back_upper() {
    if (textContains('任务已完成').findOne(25000) || textContains('喵糖已发放').findOne(25000) || desc('喵糖已发放').findOne(25000)){
        back();
        sleep(1500);
    } else {
        console.log('未定位到控件，强制返回');
        back();
        sleep(1500);
    }
}
//定位文本对应的去完成
//定位文本-> 寻找父控件->寻找子控件'去完成'
function sign_in(){
    console.log('开始执行签到');
    if (text('完成签到').findOne(3000)) {
       var si =  text('完成签到').findOne().parent().parent().parent().child(1);
        if (si.text() == '去完成') {
            si.click();
            console.log('签到完成');
        } else {
            console.log('无需执行签到');
        }
    } else {
        console.log('无需执行签到')
    }
}
function browse_mainVenue(){
    console.log('开始执行浏览主会场');
    if (text('逛逛天猫主会场(0/1)').findOne(3000)) {
       var bm =  text('逛逛天猫主会场(0/1)').findOne().parent().parent().child(1);
        if (bm.text() == '去完成') {
            bm.click();
            back_upper();
            console.log('主会场浏览完成');
        } else {
            console.log('无需浏览主会场');
        }
    } else {
        console.log('无需浏览主会场')
    }
}
function browse_10times(){
    console.log('开始执行10次浏览');
    while(text('去浏览').findOne(4000)) {
        text('去浏览').findOne(4000).click();
        back_upper();
        sleep(2000);
        }
    console.log('浏览10次完成')
}
function get_money(){
    console.log('开始执行天天领现金')
    if (text('浏览天天领现金(0/1)').findOne(3000)) {
        var gm =  text('浏览天天领现金(0/1)').findOne().parent().parent().child(1);
         if (gm.text() == '去完成') {
             gm.click();
             sleep(2500);
             setScreenMetrics(1080, 2340);
             click(470,1710);
             back_upper();
             console.log('天天领现金完成');
         } else {
             console.log('无需执行天天领现金');
         }
    }else{
        console.log('无需执行天天领现金');
    }
}
// function join_11(){
//     console.log('开始执行看看你参加了几届双11');
//     if (text('看看你参加了几届双11(0/1)').findOne(3000)) {
//         var j11 =  text('看看你参加了几届双11(0/1)').findOne().parent().parent().child(1);
//          if (j11.text() == '去完成') {
//              j11.click();
//              back_upper();
//              console.log('看看你参加了几届双11执行完成');
//          } else {
//              console.log('无需执行看看你参加了几届双11');
//          }
//     }else{
//         console.log('无需执行看看你参加了几届双11');
//     }
// }
function antforset(){
    console.log('开始执行蚂蚁森林收能量');
    if (text('蚂蚁森林收能量或浇水(0/1)').findOne(3000)) {
        var ant =  text('蚂蚁森林收能量或浇水(0/1)').findOne().parent().parent().child(1);
         if (ant.text() == '去完成') {
             ant.click();
             console.setPosition(-30, -580);
             sleep(10000);
             setScreenMetrics(1080, 2340);
             click(310,670);sleep(200);
             click(230,40);sleep(200);
             click(475,425);sleep(200);
             click(486,410);sleep(200);
             click(590,620);sleep(200);
             click(770,760);sleep(200);
             click(840,830);
             console.setPosition(-30, -95);
             console.log('收取完成');
             while(text('做任务赢奖励').findOne(5000) == null){
                back();
                sleep(2000);
            }
         } else {
             console.log('无需执行蚂蚁森林收能量');
         }
    }else{
        console.log('无需执行蚂蚁森林收能量');
    }
}
function rest(){
    console.log('开始执行残余浏览任务');
    let m = 0;
    for (let i = 0; i < 3; i++) {
        console.log('搜索中');
        if (text('浏览15s立得').findOne(2000)) {
            var re =  text('浏览15s立得').findOne().parent().parent().parent().child(1);
            if (re.text() == '去完成') {
                re.click();
                back_upper();
                m++;
                sleep(2000);
            } else {
            }
        }else{
        } 
        if (text('浏览15秒立得').findOne(1500)) {
            var re =  text('浏览15秒立得').findOne().parent().parent().parent().child(1);
            if (re.text() == '去完成') {
                re.click();
                back_upper();
                m++;
                sleep(2000);
            } else {
            }
        }else{
        }
        sleep(500);
    }
    console.log('共清理'+ m + '个残余');
}
function main(){
    threads.start(function(){
        beautiful();
        text('赚糖领红包').findOne().click();
        sleep(1500);
        for (let i = 0; i < ui.getNumber.text(); i++) {
            console.log('第'+ (i + 1) + '次执行任务开始')
            if(ui.ck_signIn.checked) {
                sign_in();
            }
            if(ui.ck_mainVenue.checked) {
                browse_mainVenue();
            }
            if(ui.ck_browse10.checked) {
                browse_10times();
            }
            if(ui.ck_getMoney.checked) {
                get_money();
            }
            if(ui.ck_ant.checked) {
                antforset();
            }
            if(ui.ck_rest.checked){
                rest();
            }
            console.log('第'+ (i + 1) + '次执行已完成')
        }
        sleep(2000);
        exit();
    });
}
// ============UI布局============
ui.layout(
    <vertical>
        <appbar>
            <toolbar title = '喵糖助手'/>
        </appbar>
        <viewpager>
            <vertical padding = "16">
                <text text = '使用说明：打开淘宝进入“双11喵糖总动员”后运行本应用' textSize = '15' gravity = 'center' marginBottom = "15"/>
                <text text = '作者：岁月の史书'  marginBottom = '15' gravity = 'right'/>
                <checkbox text="签到任务" textSize = '20' id="ck_signIn" checked='true'/>
                <checkbox text="逛逛主会场任务" textSize = '20' id="ck_mainVenue" checked='true' marginTop = "15"/>
                <checkbox text="浏览10次任务" textSize = '20' id="ck_browse10" checked='true' marginTop = "15"/>
                <checkbox text="天天领现金任务" textSize = '20' id="ck_getMoney" checked='true' marginTop = "15"/>
                <checkbox text="蚂蚁森林收能量或浇水" textSize = '20' id="ck_ant" checked='true' marginTop = "15"/>
                <checkbox text="残余浏览任务" textSize = '20' id="ck_rest" checked='true' marginTop = "15"/>
                <text text = "请输入执行次数" marginTop = "16"/>
                <input id = "getNumber" text = "1"/>
                <button id = "reverse" text = "反选" marginTop = "50" />
                <button id = "ok" text = "启动"/>
            </vertical>
        </viewpager>
    </vertical>
);


ui.reverse.on('click',() =>{
    var rever = get_checkbox_list();
    rever.forEach(x => {
        x.checked = !x.checked;
    })
});
ui.ok.on("click",() => {
        app.launchApp("淘宝");
        main();
});

//============美化控制台============
importClass(Packages.androidx.recyclerview.widget.RecyclerView);
importClass(java.io.FileInputStream);
importClass(android.graphics.drawable.Drawable);
importClass("android.graphics.Rect");
importClass("android.graphics.NinePatch");
importClass("android.graphics.drawable.NinePatchDrawable");
importClass("android.graphics.BitmapFactory");
importClass("android.graphics.Bitmap");
function beautiful(){
    console.show();
    console.setPosition(-30, -95);

ui.post(function () {
  let mConsoleView = getConsoleWindow();
  let parent = mConsoleView.parent;
  var inputView = parent.findViewById(context.getResources().getIdentifier("input", "id", context.getPackageName()));
  var buttonView = parent.findViewById(context.getResources().getIdentifier("submit", "id", context.getPackageName()));
  var titleView = parent.findViewById(context.getResources().getIdentifier("title", "id", context.getPackageName()));

  // 隐藏顶部view
  titleView.setText("");
  clearImgViewSrc("minimize");
  clearImgViewSrc("move_or_resize");
//   clearImgViewSrc("close");

  // 隐藏底部view
  ui.run(function () {
    inputView.setVisibility(8);
    buttonView.setVisibility(8);
  });

  function clearImgViewSrc(viewId) {
    var view = parent.findViewById(context.getResources().getIdentifier(viewId, "id", context.getPackageName()));
    view.setAlpha(0);
  }

  let parentViewOfTheTitleView = titleView.parent;
  ui.run(function () {
    // parentViewOfTheTitleView.attr("visibility", "invisible");
    parentViewOfTheTitleView.getBackground().setAlpha(1);
  });

  var consoleView = parent.findViewById(
    context.getResources().getIdentifier("console", "id", context.getPackageName())
  );

  // 默认情况下，所有的从同一资源（R.drawable.***)加载的drawable实例都共享一个共用的状态，如果你更改一个实例的状态，其余的实例都会接收到相同的通知。使用mutate可以使该drawable状态不定。一个不定状态的drawable不会共享状态。
  drawable = consoleView.getBackground().mutate();
  drawable.setCornerRadius(30);

//   setTimeout(function () {
//     drawable.setStroke(5, colors.parseColor("#ff0000"));
//     drawable.setColor(colors.parseColor("#3300ff00"));
//   }, 2000);

//   setTimeout(function () {
//     drawable.setColor(colors.parseColor("#ecf0f1"));
//   }, 4000);


    let filePath = "./bili.9.png";
    filePath = files.path(filePath);
    let drw = imageOperations(filePath);

    consoleView.setBackground(drw);
    consoleView.setPadding(120, 150, 80, 60);

  function imageOperations(filePath) {
    // let is = new FileInputStream(filePath);
    // let d = Drawable.createFromStream(is, filePath);
    let bitmap = BitmapFactory.decodeFile(filePath);
    let chunk = bitmap.getNinePatchChunk();
    let npd = new NinePatchDrawable(context.getResources(), bitmap, chunk, new Rect(), null);
    return npd;
  }

    // events.on("exit", function () {
    //     console.hide();
    // });

  function getConsoleWindow() {
    var mConsole = runtime.console;
    let field = mConsole.class.superclass.getDeclaredField("mConsoleFloaty");
    field.setAccessible(true);
    mConsoleFloaty = field.get(mConsole);
    mConsoleView = mConsoleFloaty.getExpandedView();
    return mConsoleView;
  }

  let r = filterView(mConsoleView);
  function filterView(view, arr) {
    arr = arr || [];
    if (view instanceof android.view.ViewGroup) {
      arr.push(view);

      let childCount = view.childCount;
      for (var i = 0; i < childCount; i++) {
        let chileView = view.getChildAt(i);
        filterView(chileView, arr);
      }
    } else {
      arr.push(view);
    }
    return arr;
  }

  let num = 10;
  ui.run(function () {
    let recycleview = r[num];
    let adapter = recycleview.getAdapter();
    // r[num].setBackgroundColor(colors.parseColor("#2ed573"));
    function createAdapter() {
      let result = JavaAdapter(
        Packages[adapter.getClass().getName()],
        {
          onBindViewHolder: function (vh, i) {
            adapter.onBindViewHolder(vh, i);
            // vh.textView.setTextSize(30);
            vh.textView.setTextColor(colors.parseColor("#ecf0f1"));
          },
        },
        recycleview.parent.parent,
        null
      );
      return result;
    }
    let newAdapter = createAdapter();
    recycleview.setAdapter(newAdapter);
  });

  setInterval(() => {}, 1000);
  let arr = [
    "android.widget.RelativeLayout{9308131 V.E...... ......I. 0,0-0,0}", // 整个控制台的父view
    "android.widget.LinearLayout{73d1bee V.E...... ......ID 36,36-924,1683}",
    "android.widget.LinearLayout{2d85df2 V.E...... ......ID 0,0-888,120}",
    "android.widget.TextView{e4232c0 V.ED..... ......ID 48,0-528,120 #7f0902e7 app:id/title}",
    "android.widget.LinearLayout{e264bf9 V.E...... ......ID 528,0-888,120}",
    "android.widget.ImageView{d0a673e VFED..C.. ......ID 0,0-120,120 #7f0901dc app:id/minimize}",
    "android.widget.ImageView{d7099f VFED..C.. ......ID 120,0-240,120 #7f0901e9 app:id/move_or_resize}",
    "android.widget.ImageView{77baec VFED..C.. ......ID 240,0-360,120 #7f0900de app:id/close}",
    "com.stardust.autojs.core.console.ConsoleView{debec43 V.E...... ......ID 0,120-888,1647 #7f0900e9 app:id/console}", // 9
    "android.widget.LinearLayout{b952908 V.E...... ......ID 0,0-888,1527}",
    "androidx.recyclerview.widget.RecyclerView{c76aeb5 VFED..... .F...... 0,0-648,328 #7f0901a5 app:id/logList}",
    "android.widget.LinearLayout{cc1b94a VFE...C.. ........ 24,328-648,448 #7f090185 app:id/inputContainer}",
    "android.widget.EditText{e2ca0bb VFED..CL. ......I. 0,13-360,133 #7f090184 app:id/input}",
    "android.widget.Button{d9b99d8 VFED..C.. ......I. 360,0-624,120 #7f0902bb app:id/submit}",
    "android.widget.ImageView{a10b84d G.ED..... ......I. 0,0-0,0 #7f090247 app:id/resizer}",
    "android.widget.ImageView{9c80250 G.ED..... ......I. 0,0-0,0 #7f0901e8 app:id/move_cursor}",
  ];
}, 1);


}
