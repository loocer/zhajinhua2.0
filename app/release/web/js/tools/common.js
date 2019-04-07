const w = laya.utils.Browser.width
const h = laya.utils.Browser.height
const wl = w>>2
const wh = w>>1
const x=200
const y=200
const vh = h>>1
const picdsd = [
    "./res/fds.jpg",
    './res/kuang.jpg'
]
// const texture ="./res/bg.jpg";
const PLAYERSPOSITION_EIGHT = [
    [40,50],
    [h-200,70],
]

const  randomNumBoth =(Min,Max)=>{
      const Range = Max - Min;
      const Rand = Math.random();
      const num = Min + Math.round(Rand * Range); 
      return num;
}
const statusType = {
	'ON_COME' : '未准备',
	'ON_READY':'已准备',
	'ON_START':'正在进行',
	'SHOW_VALUE':'看牌',
	'GAME_PASS':'已经pass',
	'GAME_PK':'pk',
	'ON_RAISE':'投注',
}
const getPositions=(psNum)=>{
    console.log(psNum)
    if(psNum>6){
        return PLAYERSPOSITION_EIGHT
    } 
    if(psNum>4){
         return PLAYERSPOSITION_SIX
    }else{
        console.log(PLAYERSPOSITION_SIX)
        return PLAYERSPOSITION_FOUR
    }
}
const Adress = "api"
const fontColor = "#ececec"