var imgObj = Laya.Image;
// var dif = [texture,plerBg]
var GameMain = {
    roomInfo:'',
    players:[],
    draw:{
        base:{},
        poen:{},
        action:{
            event:{}
        },
    },
    positions:{
        pokerPositions:[]
    },
    // paics:dif,
    picNum:0
}
GameMain.init = function(){
    Laya.loader.load([
        ...picdsd,
        ...buttonBg.values(),
    ],Laya.Handler.create(this,GameMain.graphicsImg));
    // this.draw.base.avatar()
}
GameMain.graphicsImg = function(){
        // Zhajinhua.service.getSocketAdress()
    GameMain.view()
    
}
GameMain.draw.action.event.b1=()=>{
    
    console.log(1)
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
    const pokers = POKERPOSITION
    for(let i in pso){
        GameMain.draw.base.onePeople(pso[i])
    }
    buton.map((item,index)=>{
        console.log(index)
        GameMain.draw.action.createTool(item[2],GameMain.draw.action.event.b1,item)
    })
    pokers.map((item,index)=>{
        GameMain.players.push({
            position:item
        })
    })
    GameMain.draw.action.fapai()
}
GameMain.draw.action.fapai = ()=>{
    const  ps = GameMain.players
    const acplays = []
    for(let q=0;q<3;q++){
        for(let i in ps){
            const acSprite = new Laya.Sprite();
            acSprite.x = wh - pw/2
            acSprite.y = vh - ph/2
            const texture = Laya.loader.getRes(buttonBg.get('godd'));
            acSprite.graphics.drawTexture(texture);        
            acSprite.scale(.2,.2)
            acSprite.pos( wh - pw/2,vh - ph/2);
            Laya.stage.addChild(acSprite);
            acplays.push(acSprite);
        }
    }
    for(let i in acplays){
        const my = ps[i%ps.length].position[1]
        const playerId = 'regregr'
        const mx = ps[i%ps.length].position[0]
        const r = randomNumBoth(0,360)
        GameMain.positions.pokerPositions.push({playerId:playerId,x:mx,y:my,r:r})
        Laya.Tween.to(acplays[i],
            {y:my,x:mx,pivotY:80,pivotX:60,rotation:r}
            ,400,Laya.Ease.backOut,null,i*100);
    }
}
GameMain.draw.poen.createAvadar = (texture)=>{
    console.log(texture)
    let img = new imgObj(texture);
    img.width=50
    img.pos(10,15)
    img.height=50
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
    label.pos(25,70)
    label.fontSize = 10;
    label.color = "#fff";
    label.stroke = 0.11;
    label.strokeColor = "#0008ff";
    return label
}
GameMain.draw.poen.createImcon= (texture)=>{
    let imcon = new imgObj(texture);
    imcon.width=10
    imcon.pos(10,70)
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
GameMain.draw.action.createTool= (skin,Handler,po)=>{
    const Button = Laya.Button;
	let btn = new Button(skin);
    console.log(Handler)
    btn.on(Event.CLICK, this, Handler);
    btn.height=50
    btn.width=50
    btn.stateNum=1
    btn.pos(po[0],po[1])
	Laya.stage.addChild(btn);
}
GameMain.draw.base.onePeople=(position)=>{
    console.log(GameMain.screenMm)
    const scb = GameMain.screenMm
    const temp =GameMain.draw.poen
    const bg = temp.createBg(picdsd[1])
    let img = temp.createAvadar(picdsd[0])
    // Laya.stage.addChild(img);
    let label = temp.createNikeName('joke.fd')
    let money = temp.createMoney(100)
    let imcon = temp.createImcon(picdsd[0])

    

   

    
        // label.on(Laya.Event.CLICK, this,Zhajinhua.Event.pk);
        // Laya.stage.addChild(label);
    const  panel = new Laya.Panel();
    panel.width=70;
    panel.height=85;
    panel.pos(position[0],position[1])
    panel.align='center'
    panel.addChild(bg)
    panel.addChild(label)
    panel.addChild(img)
    panel.addChild(money)
    panel.addChild(imcon)

    Laya.stage.addChild(panel)
    // const Image = Laya.Image;
    // let img = new Image(texture);
    // img.width=100
    // img.pos(0,20)
    // img.height=100
    // // Laya.stage.addChild(img);

    // const label = new Laya.Label();
    // label.font = "Microsoft YaHei";
    // label.text = '高位';
    // label.align='center'
    // label.width=110
    // label.id = 'rer'
    // label.pos(0,0)
    // label.fontSize = 10;
    // label.color = "#0008ff";
    // label.stroke = 0.11;
    // label.strokeColor = "#0008ff";

    // const money = new Laya.Label();
    // money.font = "Microsoft YaHei";
    // money.text = '10000';
    // money.align='center'
    // money.width=110
    // money.id = 'rer'
    // money.pos(0,125)
    // money.fontSize = 10;
    // money.color = "#0008ff";
    // money.stroke = 0.11;
    // money.strokeColor = "#0008ff";

    // let imcon = new Image(texture);
    // imcon.width=20
    // imcon.pos(0,125)
    // imcon.height=20
    //     // label.on(Laya.Event.CLICK, this,Zhajinhua.Event.pk);
    //     // Laya.stage.addChild(label);
    // const  panel = new Laya.Panel();
    // panel.width=110;
    // panel.height=150;
    // panel.pos(50,10)
    // panel.align='center'
    // panel.bgColor="#a7a7a7"
    // panel.addChild(label)
    // panel.addChild(img)
    // panel.addChild(money)
    // Laya.stage.addChild(panel)
        // let monkey2 = Laya.loader.getRes(texture);
		// 	let ape2 = new Laya.Sprite();
		// 	Laya.stage.addChild(ape2);
        //     ape2.size(200,200);
        //     ape2.displayWidth= 100
        //     ape2.displayHeight= 100
        //     ape2.size(100,100);
        //     ape2.pos(200,200)
		// 	ape2.graphics.drawTexture(monkey2, 100, 0);
    //     var acSprite = new Laya.Sprite();
    //     acSprite.graphics.drawTexture(texture);                        
    // //设置纹理宽高
    //     acSprite.scale(.1,.1)
    //     acSprite.size(200,200);
    //     acSprite.pivotY = x
    //     acSprite.pivotX = y
    //     // acSprite.pos( pos[i].x,pos[i].y);
    //     // acSprite.rotation = 180
    //     // acSprite.on(Laya.Event.CLICK, this,onSpriteClick);
    //     Laya.stage.addChild(acSprite);
    
}