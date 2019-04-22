// const h = laya.utils.Browser.width
// const w = laya.utils.Browser.height

const w=Laya.Browser.clientHeight
const h=Laya.Browser.clientWidth
const wl = w>>2
const wh = w>>1
const x=200
const y=200
const pw = 250>>2
const ph = 374>>2
const vh = h>>1
const picdsd = [
    "./res/fds.jpg",
    './res/kuang.jpg'
]
const buttonBg = new Map([
    ['cop','./res/button/btn-compler.png'],
    ['alwAdd','./res/button/btn-always-add.png'],
    ['getOut','./res/button/btn-getout.png'],
    ['showValue','./res/button/btn-show.png'],
    ['rise','./res/bg/rise-5.png'],
    ['addRise','./res/button/btn-add-rise.png'],
    ['godd','./res/bg/godd.png'],
    ['riseBat','./res/button/btn-rise.png'],
    ['few','./res/button/out-room.png'],
    ['gre','./res/button/laba-open.png'],
])
const pokerBg = new Map([])
// const texture ="./res/bg.jpg";
const PLAYERSPOSITION_EIGHT = [
    [75*w/1600,145*h/900],
    [75*w/1600,460*h/900],
    [470*w/1600,660*h/900],
    [917*w/1600,640*h/900],
    [1336*w/1600,460*h/900],
    [1336*w/1600,145*h/900],
    [1040*w/1600,40*h/900],
    [385*w/1600,40*h/900],
]

const ACTIONBUTTON = [
    [970*w/1600,780*h/900,'./res/button/btn-rise.png',50],
    [1400*w/1600,10*h/900,'./res/button/laba-open.png',20],
    [1500*w/1600,10*h/900,'./res/button/out-room.png',20],
    [25*w/1600,800*h/900,'./res/button/btn-always-add.png',50],
    [210*w/1600,780*h/900,'./res/button/btn-compler.png',50],
    [370*w/1600,780*h/900,'./res/button/btn-getout.png',50],
    [645*w/1600,780*h/900,'./res/button/btn-show.png',50],
    [805*w/1600,780*h/900,'./res/button/btn-add-rise.png',50]
]
const POKERPOSITION = [
    [290*w/1600,330*h/900],
    [290*w/1600,570*h/900],
    [500*w/1600,590*h/900],
    [970*w/1600,570*h/900],
    [1213*w/1600,460*h/900],
    [1230*w/1600,330*h/900],
    [1020*w/1600,300*h/900],
    [420*w/1600,300*h/900]
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
const Adress = "http://localhost:8080/api"
const fontColor = "#ececec"