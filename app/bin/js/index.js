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


Laya.stage.fullScreenEnabled = true;
Laya.stage.bgColor = "#fff";
// Laya.stage.scaleMode = Stage.SCALE_FIXED_AUTO
// GameMain.init();
const playerId = localStorage.playerId
const roomNo = localStorage.roomNo

const InitData = {}
InitData.getUserInfo = function(playerId){
    const parm = `id=${playerId}`
    const hr = new HttpRequest();
    hr.once(Event.PROGRESS, this, onHttpRequestProgress);
    hr.once(Event.COMPLETE, this, InitData.onHttpRequestComplete);
    hr.once(Event.ERROR, this, onHttpRequestError);
    hr.send(Adress+`/get-userInfo?${parm}`,null, 'get', 'json');
    InitData.hr = hr
}
function onHttpRequestError(e)
{
    console.log(e);
    Login.init()
}

function onHttpRequestProgress(e)
{
    console.log(e);
}

InitData.onHttpRequestComplete=function(e)
{   
    const rus = InitData.hr.data
    if(rus.status){
        User = rus.data.user
        getRoomStatus(roomNo)
    }else{
        Login.init()
    }
    // console.log(Login.hr.data)
    // logger.text += "收到数据：" + hr.data;
}
function getRoomStatus(playerId){
    const parm = `roomNo=${playerId}`
    const hr = new HttpRequest();
    hr.once(Event.PROGRESS, this, onHttpRequestProgress);
    hr.once(Event.COMPLETE, this, InitData.onHttpRequestCompleteer);
    hr.once(Event.ERROR, this, onHttpRequestError);
    hr.send(Adress+`/get-roomStatus?${parm}`, null, 'get', 'json');
    InitData.hr = hr
}
InitData.onHttpRequestCompleteer=function(e)
{   
    const rus = InitData.hr.data
    if(rus.status){
        GameMain.init()
    }
    // alert(rus.msg)
    // console.log(Login.hr.data)
    // logger.text += "收到数据：" + hr.data;
}
if(playerId){
    InitData.getUserInfo(playerId)
}else{
    Login.init();
}