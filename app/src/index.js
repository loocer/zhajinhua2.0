Laya.MiniAdpter.init();
const Stage       = Laya.Stage;
const Text        = Laya.Text;
const Event       = Laya.Event;
const HttpRequest = Laya.HttpRequest;
const Browser     = Laya.Browser;
const WebGL       = Laya.WebGL;
//初始化引擎
Laya.init(Laya.Browser.clientWidth,Laya.Browser.clientHeight);
Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;

Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
Laya.stage.fullScreenEnabled = true;
Laya.stage.bgColor = "#fff";
let bg = new Laya.Image();
bg.skin = "res/bg.jpg";
bg.hegiht=Laya.Browser.clientHeight
bg.width=Laya.Browser.clientWidth
Laya.stage.addChild(bg);
GameMain.init();