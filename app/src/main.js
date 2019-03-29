var GameMain = {
    draw:{
        base:{}
    },
    picNum:0
}
GameMain.init = function(){
    Laya.loader.load(texture,Laya.Handler.create(this,GameMain.graphicsImg));
    this.draw.base.avatar()
}
GameMain.graphicsImg = function(){
    this.picNum ++
    if(1 == this.picNum){
        // Zhajinhua.service.getSocketAdress()
        GameMain.view()
    }
}
GameMain.view = ()=>{
    GameMain.draw.base.avatar()
}
GameMain.draw.base.avatar=()=>{
    const Image = Laya.Image;

		let dialog = new Image(texture);
        dialog.width=100
        dialog.height=100
        Laya.stage.addChild(dialog);
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