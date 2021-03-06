var imgObj = Laya.Image;
// var dif = [texture,plerBg]
const GameMain = {
    roomInfo:null,
    service:{},
    socketAddress:{},
    pokerImg:new Map(),
    players:new Map(),
    tool:{},
    msg:{},
    myPlayer:null,
    draw:{
        base:{},
        showValueGraphicsImg:null,
        poen:{},
        action:{
            event:{}
        },
    },
    positions:{
        pokerPositions:[],
        chipPositions:[]
    },
    // paics:dif,
    picNum:0
}
GameMain.service.getSocketAdress = function(){
    const hr = new HttpRequest();
    hr.once(Event.PROGRESS, this, GameMain.socketAddress.onHttpRequestProgress);
    hr.once(Event.COMPLETE, this, GameMain.socketAddress.onHttpRequestComplete);
    hr.once(Event.ERROR, this, GameMain.socketAddress.onHttpRequestErrorError);
    hr.send(Adress+'/get-socketAddress', null, 'get', 'json');
    GameMain.socketAddress.hr = hr
}
GameMain.socketAddress.onHttpRequestError = function(e)
{
    console.log(e);
}

GameMain.socketAddress.onHttpRequestProgress = function(e)
{
    console.log(e);
}

GameMain.socketAddress.onHttpRequestComplete = function(e)
{   
    const rus = GameMain.socketAddress.hr.data
    if(rus.status){
        GameMain.network(rus.data)
    }
    console.log(rus)
    // logger.text += "收到数据：" + hr.data;
}
GameMain.network = function(url){
    const Event  = Laya.Event;
	const Byte   = Laya.Byte;
    const msg = { 
        acType: 'ON_COME',
        roomId: GameMain.roomInfo.roomNo,
        playerId:User.id,
        playerRoom:GameMain.positions,
        raiseMoney:1
    }
    GameMain.socket = io.connect(url);
    GameMain.socket.emit(GameMain.roomInfo.roomNo, msg);
    GameMain.socket.on(GameMain.roomInfo.roomNo, function(msg){
        console.log(msg)
        Laya.stage.destroyChildren()
        GameMain.tool.forPlayer(msg)
        // const ps = GameMain.players
        // let p = null
        // for(let i in ps){
        //     if(ps[i].user.id == msg.backObj.playerId){
        //         p= ps[i];
        //     }
        // }
        // if(msg.backObj.acType === 'ON_COME'){
        //     Zhajinhua.view(msg)
        // }
        // if(msg.backObj.acType === 'ON_READY'){
        //     Zhajinhua.view(msg)
        // }
        // if(msg.backObj.acType === 'SHOW_VALUE'){
        //     Zhajinhua.view(msg)
        //     Zhajinhua.Draw.showValue(p)
        // }
        // if(msg.backObj.acType === 'ON_RAISE'){
        //     Zhajinhua.view(msg)
        //     Zhajinhua.Draw.touzhu(p)
        // }
        // if(msg.backObj.acType === 'ON_START'){
        //     Zhajinhua.view(msg)
        //     Zhajinhua.Draw.fapai()
        // }
        // if(msg.backObj.acType === 'GAME_PASS'){
        //    Zhajinhua.Draw.onPass(msg)
        //     Zhajinhua.view(msg)
        // }
        // if(msg.backObj.acType === 'GAME_PK'){
        //     Zhajinhua.Draw.pkAc(msg)
        //     Zhajinhua.view(msg)
        // }
        // if(msg.backObj.acType === 'GAME_OVER'){
        //     Zhajinhua.tool.setDongPlers([])
        //     Zhajinhua.view(msg)
        //     Zhajinhua.Draw.over(msg)
        // }
    })
    
}
GameMain.init = function(){
    Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
    Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
    GameMain.tool.initImg()
    GameMain.tool.forPlayer()
    Laya.loader.load([
        ...GameMain.pokerImg.values(),
        ...picdsd,
        ...buttonBg.values(),
    ],Laya.Handler.create(this,GameMain.graphicsImg));
    // this.draw.base.avatar()
}
GameMain.init.player = function(){

}
GameMain.graphicsImg = function(){
    GameMain.service.getSocketAdress()
    // GameMain.view()
}
GameMain.draw.action.event.b1=()=>{
    let obj=GameMain.players.get('regregr1')
    let msg = { 
        acType: 'ON_COME',
        roomId: Zhajinhua.roomInfo.roomNo,
        playerId:User.id,
        playerRoom:Zhajinhua.positions,
        raiseMoney:1
    }
    msg.acType = 'ON_START'
    GameMain.socket.emit(GameMain.roomInfo.roomNo, msg);
    GameMain.draw.action.kanpai(obj)
    console.log(1)
}
GameMain.draw.action.event.b2=()=>{
    let obj=GameMain.players.get('regregr2')
    GameMain.draw.action.kanpai(obj)
    console.log(1)
}
GameMain.draw.action.event.b3=()=>{
    let obj=GameMain.players.get('regregr6')
    GameMain.draw.touzhu(obj)
    console.log(1)
}
GameMain.draw.action.event.b5=()=>{
    let obj=GameMain.players.get('regregr3')
    GameMain.draw.action.qipai(obj)
    GameMain.draw.action.alertInfo(obj)
    console.log(1)
}

GameMain.draw.action.event.b4=()=>{
    let str = `
        <tr style="border-top:1px solid #d8d8d8">
            <td style="width:150px;text-align: center;padding: 5px;">
                <img src="${picdsd[0]}" style="width:50px;height:50px"  alt="上海鲜花港 - 郁金香" />
                <div style="width:50px;color：#fff">高伟</div>
            </td>
           
            <td style="width:150px;text-align: center;">
                <img src="${GameMain.pokerImg.get(1)}" style="width:40px;height:60px"  alt="上海鲜花港 - 郁金香" />
            </td>
            <td style="width:150px;text-align: center;">
                <img src="${GameMain.pokerImg.get(5)}" style="width:40px;height:60px"  alt="上海鲜花港 - 郁金香" />
            </td>
            <td style="width:150px;text-align: center;">
                <img src="${GameMain.pokerImg.get(7)}" style="width:40px;height:60px"  alt="上海鲜花港 - 郁金香" />
            </td>
            <td style="width:150px;text-align: center;color:#fff">+10</td>
        </tr>   
    `
    let stred = ''
    for(let i=0;i<8;i++){
        stred+=str
    }
    var d = dialog({
        skin: 'results-dialog',
        width: '100%',
        title: '游戏结果',
        content: `
        <div style="background:#131111;height:300px;width:300px;overflow-y :scroll;color:#fff"> 
        <table border="0" cellspacing="0">
        <tr style="background:#d8d8d8">
            <th style="width:150px;text-align: center;">玩家</th>
            <th style="width:150px;text-align: center;" colspan=3>牌值</th>
            <th style="width:150px;text-align: center;">输赢</th>
        </tr>
        ${stred}
        </table>
        </div>
        `
    });
    d.show();
    // const temp =GameMain.draw.poen
    // const bg = temp.createBg(picdsd[1])
    // bg.size(w*.8,h*.9)
    // const  panel = new Laya.Panel();
    // panel.width=w;
    // panel.height=h;
    // // panel.pos(0,0)
    // panel.align='center'
    // panel.addChild(bg)
    // panel.addChild(list)
    // // d.showModal();
    

    // panel.pos(w*.1,h*.05);
    // Laya.stage.addChild(panel);
    // const List = Laya.List,
	// 	Handler = Laya.Handler;
	// let list = new List();

}

GameMain.view = ()=>{
    let bg = new Laya.Image();
    bg.skin = "res/bg/groundBg.png";
    bg.hegiht=Laya.Browser.clientWidth
    bg.width= Laya.Browser.clientHeight
    bg.sizeGrid = "0,0,0,0"
    bg.scaleX=1
    bg.scaleY=h/630
    Laya.stage.addChild(bg);
    const pso = PLAYERSPOSITION_EIGHT
    const buton = ACTIONBUTTON
    for(let i in pso){
        GameMain.draw.base.onePeople(pso[i])
    }
    let events =[
        GameMain.draw.action.event.b1,
        GameMain.draw.action.event.b2,
        GameMain.draw.action.event.b3,
        GameMain.draw.action.event.b4,
        GameMain.draw.action.event.b5,
        GameMain.draw.action.event.b5,
        GameMain.draw.action.event.b5,
        GameMain.draw.action.event.b5
    ]
    buton.map((item,index)=>{
        console.log(index)
        GameMain.draw.action.createButtonTool(item[2],events[index],item)
    })
    GameMain.draw.action.fapai()
    GameMain.draw.roomInfo()
    GameMain.draw.roomMsg()
}
GameMain.draw.action.alertInfo = (player)=>{
    let d = dialog({
        skin: 'msg-dialog',
	    content: `<div style="text-align: center;width:160px">
        ${player.name}下注20
        </div>`
    });
    d.show();
    setTimeout(function () {
        d.close().remove();
    }, 1000);
}

GameMain.draw.action.qipai = (player)=>{
    // if(player.id==GameMain.myPlayer.id){
    //     player.pokers_ac.map((item)=>{
    //         Laya.stage.removeChild(item)
    //     })
    // }
    player.pokers_ac.map((item)=>{
        Laya.stage.removeChild(item)
    })
}
GameMain.draw.roomInfo=()=>{
    let obj = {
        text:'房间号：908098',
        position:[10,10],
    }
    let obj1 = {
        text:'底注：20',
        position:[w*.6,160],
    }
    let obj2 = {
        text:'封顶：908098',
        position:[w*.6,170],
    }
    let obj3 = {
        text:'轮数：908098',
        position:[w*.6,180],
    }
    GameMain.draw.action.createTextTool(obj1)
    GameMain.draw.action.createTextTool(obj2)
    GameMain.draw.action.createTextTool(obj3)
    GameMain.draw.action.createTextTool(obj)
}
GameMain.draw.roomMsg=()=>{
    for(let i = 0;i<4;i++){
        let obj = {
            text:'房间号：玩家‘隔热个人’与玩家‘电饭锅仍’比牌！',
            position:[w*.8,h*.85+10*i],
        }
        GameMain.draw.action.createMsgTool(obj)
    }
}

GameMain.draw.action.fapai = ()=>{
    const plers = GameMain.players
    const ps = GameMain.players.values()
    const acplays = []
    for(var q=0;q<3;q++){
        plers.forEach(function(value, key) {
            const acSprite = new Laya.Sprite();
            value.pokers_ac.push(acSprite)
            acSprite.x = wh - pw/2
            acSprite.y = vh - ph/2
            const texture = Laya.loader.getRes(buttonBg.get('godd'));
            acSprite.graphics.drawTexture(texture);        
            acSprite.scale(.2,.2)
            acSprite.pos( wh - pw/2,vh - ph/2);
            Laya.stage.addChild(acSprite);
            acplays.push({
                id:value.id,
                acs:acSprite
            });
        })
    }
    for(let i in acplays){
        const my = plers.get(acplays[i].id).position[1]
        const mx = plers.get(acplays[i].id).position[0]
        const r = randomNumBoth(0,360)
        GameMain.positions.pokerPositions.push({playerId:acplays[i].id,x:mx,y:my,r:r})
        Laya.Tween.to(acplays[i].acs,
            {y:my,x:mx,pivotY:80,pivotX:60,rotation:r}
            ,400,Laya.Ease.backOut,null,i*100);
    }
}
GameMain.draw.showValueGraphicsImg = function(){
    const player = GameMain.myPlayer
    const my = player.pokers_ac
    console.log(my);
    const x = player.position[0] - 20;
    GameMain.positions.showPokerPositions = []
    for(let i in my){
        my[i].graphics.clear();
        const texture = Laya.loader.getRes(GameMain.myPlayerPokerUrl[i]);
        my[i].graphics.drawTexture(texture);
        my[i].scale(.30,.30);
        my[i].size(texture.width, texture.height);
        Laya.Tween.to(my[i],{x:x + 40*i,rotation:180},300,Laya.Ease.backOut,null,i*100);
        GameMain.positions.showPokerPositions.push({x:x + 150*i,y:my[i].y})
    } 
    const tempArray = []
    for(let  i in GameMain.positions.pokerPositions){
        if(GameMain.positions.pokerPositions[i].playerId !=player.id){
            tempArray.push(GameMain.positions.pokerPositions[i])
        }
    }
    GameMain.positions.pokerPositions = tempArray
}
GameMain.draw.action.kanpai = (player)=>{
    // if(player.id ==User.id){
    let fd = player
    if(player.id==GameMain.myPlayer.id){
        console.log(GameMain.myPlayer.id)
        GameMain.myPlayerPokerUrl = []
        const values = player.pokerValue
        for(let v in values){
            let img = GameMain.pokerImg.get(values[v])
            GameMain.myPlayerPokerUrl.push(img)
        }
        GameMain.draw.showValueGraphicsImg()
    }else{
        const x = player.position[0] -10;
        const pok = player.pokers_ac
        Laya.Tween.to(pok[0],{x:x+10,rotation:180},300,Laya.Ease.backOut,null,100);
        Laya.Tween.to(pok[1],{x:x+20 ,rotation:180},300,Laya.Ease.backOut,null,200);
        Laya.Tween.to(pok[2],{x:x+30,rotation:180},300,Laya.Ease.backOut,null,300);
        let cont = 0
        for(let  i in GameMain.positions.pokerPositions){
            if(GameMain.positions.pokerPositions[i].playerId ==player.id){
                if(cont==0){
                    GameMain.positions.pokerPositions[i].x=x+10
                    GameMain.positions.pokerPositions[i].r=180
                }
                if(cont==1){
                    GameMain.positions.pokerPositions[i].x=x+20
                    GameMain.positions.pokerPositions[i].r=180
                }
                if(cont==2){
                    GameMain.positions.pokerPositions[i].x=x+30
                    GameMain.positions.pokerPositions[i].r=180
                }
                cont++
            }
        }
    }
}
GameMain.draw.poen.createAvadar = (texture)=>{
    console.log(texture)
    let img = new imgObj(texture);
    img.width=30
    img.pos(10,15)
    img.height=30
    return img
}

GameMain.draw.poen.createNikeName = (name)=>{
    const label = new Laya.Label();
    label.font = "Microsoft YaHei";
    label.text = name;
    label.align='center'
    label.width=70
    label.id = 'rer'
    label.pos(0,2)
    label.fontSize = 10;
    label.color = "#fff";
    label.stroke = 0.11;
    label.strokeColor = "#0008ff";
    return label
}
GameMain.draw.poen.createMoney = (money)=>{
    const label = new Laya.Label();
    label.font = "Microsoft YaHei";
    label.text = money;
    label.align='left'
    label.width=60
    label.id = 'rer'
    label.pos(25,50)
    label.fontSize = 10;
    label.color = "#fff";
    label.stroke = 0.11;
    label.strokeColor = "#0008ff";
    return label
}
GameMain.draw.poen.createStatus = (status=true)=>{
    const label = new Laya.Label();
    label.font = "Microsoft YaHei";
    label.text = '。';
    label.align='left'
    label.width=5
    label.id = 'rer'
    label.pos(0,-30)
    label.fontSize = 50;
    label.color = status?"#44cb00":"#c7c7c7";
    label.stroke = 0.1;
    label.strokeColor = "#0008ff";
    return label
}
GameMain.draw.poen.createImcon= (texture)=>{
    let imcon = new imgObj(texture);
    imcon.width=10
    imcon.pos(10,50)
    imcon.height=10
    return imcon
}

GameMain.draw.poen.createBg= (ic)=>{
    let imcon = new imgObj(ic);
    imcon.width=70
    imcon.pos(0,0)
    imcon.height=85
    return imcon
}
GameMain.allplers = ()=>{
    
}
GameMain.draw.action.createButtonTool= (skin,Handler,po)=>{
    const Button = Laya.Button;
	let btn = new Button(skin);
    btn.on(Event.CLICK, this, Handler);
    btn.height=po[4]||po[3]
    btn.width=po[3]
    btn.stateNum=1
    btn.pos(po[0],po[1])
	Laya.stage.addChild(btn);
}
GameMain.draw.action.createTextTool= (po)=>{
   const label = new Laya.Label();
    label.font = "Microsoft YaHei";
    label.text = po.text;
    label.align='left'
    label.width=60
    label.id = 'rer'
    label.pos(po.position[0],po.position[1])
    label.fontSize = 10;
    label.color = "#fff";
    label.stroke = 0.11;
    label.strokeColor = "#0008ff";
    Laya.stage.addChild(label);
    return label
}
GameMain.draw.action.createMsgTool= (obj)=>{
    const Text = Laya.Text;
    let text = new Text();
    Laya.stage.addChild(text);
    text.overflow = Text.HIDDEN;
    text.width = 150;
    text.color = "#898989";
    text.font = "Impact";
    text.fontSize = 10;
    text.pos(obj.position[0],obj.position[1])
    text.text = obj.text;
    return text;
}
GameMain.draw.base.onePeople=(position)=>{
    const scb = GameMain.screenMm
    const temp =GameMain.draw.poen
    const bg = temp.createBg(picdsd[1])
    let img = temp.createAvadar(picdsd[0])
    let label = temp.createNikeName('joke.fd')
    let money = temp.createMoney(100)
    let imcon = temp.createImcon(picdsd[0])
    let status = temp.createStatus()
    const  panel = new Laya.Panel();
    panel.width=60;
    panel.height=60;
    panel.pos(position[0],position[1])
    panel.align='center'
    panel.addChild(bg)
    panel.addChild(label)
    panel.addChild(img)
    panel.addChild(money)
    panel.addChild(imcon)
    panel.addChild(status)
    Laya.stage.addChild(panel)
}
GameMain.draw.touzhu = function(ps){
    const obj = {x:ps.peopelp[0],y:ps.peopelp[1]}
    const pff = new Laya.Sprite();
    pff.x = obj.x
    pff.y = obj.y
    var fdf = Laya.loader.getRes(buttonBg.get('rise'));
    pff.graphics.drawTexture(fdf);    
    pff.scale(.9,.9)
    pff.size(fdf.width, fdf.height); 
    pff.pos( obj.x,obj.y);
    Laya.stage.addChild(pff);
    const ex = wh - pw/2+randomNumBoth(-30,60)
    const ey = vh - randomNumBoth(-30,60)
    GameMain.positions.chipPositions.push({x:ex,y:ey})
    Laya.Tween.to(pff,
            {x:ex,y:ey}
            ,1000,Laya.Ease.backOut,null,10);
}
GameMain.tool.initImg = function(){
    let index = 1
    for(let i=1;i<14;i++){
        for(let f=1;f<5;f++){
            GameMain.pokerImg.set(index,`./res/value/${f}/${i}.png`)
            index++
        }
    }
}
GameMain.tool.forPlayer = function(msg){
    // Zhajinhua.doing = msg.roomPlayers.doingObj
   
    // const p = msg.roomPlayers.players
    // for(let m in p){
    //     if(p[m].id === User.id){
    //         Zhajinhua.players =  p.slice(m,p.length).concat(p.slice(0,m))
    //     }
    // }
    const positions = POKERPOSITION
    const peopelps =  PLAYERSPOSITION_EIGHT
    // pokers.map((item,index)=>{
    //     GameMain.players.push({
    //         position:item
    //     })
    // })
    for(let i =0;i<8;i++){
        GameMain.players.set('regregr'+i,{
            id:'regregr'+i,
            name:'john'+i,
            position:positions[i],
            pokerValue:[3,5,14],
            pokers_ac:[],
            peopelp:peopelps[i]
        })
    }
    GameMain.myPlayer = GameMain.players.get('regregr2')
    // this.players = Zhajinhua.players
}