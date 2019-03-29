const w = laya.utils.Browser.width
const h = laya.utils.Browser.height
const wl = w>>2
const wh = w>>1
const vh = h>>1
const PLAYERSPOSITION_EIGHT = [
    [wl,h-200],
    [wl*3,h-200],
    [w-200,vh+300],
    [w-200,vh-300],
    [wl*3,200],
    [wl,200],
    [200,vh-300],
    [200,vh+300],
]
const PLAYERSPOSITION_SIX = [
    [w>>1,h-200],
    [w-200,vh+300],
    [w-200,vh-300],
    [w>>1,200],
    [200,vh-300],
    [200,vh+300],
]
const PLAYERSPOSITION_FOUR = [
    [w>>1,h-200],
    [w-200,vh],
    [w>>1,200],
    [200,vh],
]
const  randomNumBoth =(Min,Max)=>{
      const Range = Max - Min;
      const Rand = Math.random();
      const num = Min + Math.round(Rand * Range); 
      return num;
}
const ALLPOSITION = [
    PLAYERSPOSITION_EIGHT,
    PLAYERSPOSITION_SIX,
    PLAYERSPOSITION_FOUR
]
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