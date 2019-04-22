Laya.MiniAdpter.init();
var Stage       = Laya.Stage;
var Text        = Laya.Text;
var Event       = Laya.Event;
var HttpRequest = Laya.HttpRequest;
var Browser     = Laya.Browser;
var WebGL       = Laya.WebGL;
//初始化引擎
Laya.init(Laya.Browser.clientHeight,Laya.Browser.clientWidth);
Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;

Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
Laya.stage.fullScreenEnabled = true;
Laya.stage.bgColor = "#fff";
// Laya.stage.scaleMode = Stage.SCALE_FIXED_AUTO
GameMain.init();
