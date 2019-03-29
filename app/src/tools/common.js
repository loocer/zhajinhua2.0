const w = laya.utils.Browser.width
const h = laya.utils.Browser.height
const wl = w>>2
const wh = w>>1
const x=200
const y=200
const vh = h>>1
const texture ="http://d.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=1be47219c1fdfc03e52debbce10faba2/b8389b504fc2d562562d540ae51190ef76c66c34.jpg";
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