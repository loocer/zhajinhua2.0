var imgObj = Laya.Image;
// var dif = [texture,plerBg]
var GameMain = {
    draw:{
        base:{}
    },
    // paics:dif,
    picNum:0
}
GameMain.init = function(){
    Laya.loader.load(picdsd,Laya.Handler.create(this,GameMain.graphicsImg));
    // this.draw.base.avatar()
}
GameMain.graphicsImg = function(){
        // Zhajinhua.service.getSocketAdress()
    GameMain.view()
    
}
GameMain.view = ()=>{
    GameMain.draw.base.avatar()
}
GameMain.draw.createAvadar = (texture)=>{
    console.log(texture)
    let img = new imgObj(texture);
    img.width=50
    img.pos(10,15)
    img.height=50
    return img
}
GameMain.draw.createNikeName = (name)=>{
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
GameMain.draw.createMoney = (money)=>{
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
GameMain.draw.createImcon= (texture)=>{
    let imcon = new imgObj(texture);
    imcon.width=10
    imcon.pos(10,70)
    imcon.height=10
    return imcon
}

GameMain.draw.createBg= (ic)=>{
    let imcon = new imgObj(ic);
    imcon.width=70
    imcon.pos(0,0)
    imcon.height=85
    return imcon
}
GameMain.allplers = ()=>{
    
}
GameMain.draw.base.avatar=()=>{
    const temp =GameMain.draw
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
    panel.pos(40,50)
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