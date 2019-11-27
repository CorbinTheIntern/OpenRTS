var can, ctx;
var CAN_W = 900;
var CAN_H = 600;
var FPS = 60;

var background = new Image();
background.src = '';

var alliedUnits = [];
var enemyUnits = [];
var selectedUnit;
var terrain = [
    {
        'x': CAN_W/2 - 100,
        'y': CAN_H/2 - 25,
        'w': 200,
        'h': 50
    },
    
    {
        'x': 0,
        'y': 0,
        'w': CAN_W,
        'h': 10
    },
    
    {
        'x': 0,
        'y': CAN_H - 10,
        'w': CAN_W,
        'h': 10
    },
    
    {
        'x': 0,
        'y': 0,
        'w': 10,
        'h': CAN_H
    },
    
    {
        'x': CAN_W-10,
        'y': 0,
        'w': 10,
        'h': CAN_H
    }
];


function init() {
    can = document.getElementById('can');
    ctx = can.getContext('2d');
    
    can.width = CAN_W;
    can.height = CAN_H;
    
    selectedUnit = Units.Basic;
    
    document.addEventListener('mousedown', onClick, false);
    setInterval(loop, 1000/FPS);
}

function loop () {
    moveUnits(); //TODO
    draw();
}

function onClick(e) {
    console.log('Clicked at (' + e.pageX + ', ' + e.pageY + ')');
    if(e.pageX < CAN_W && e.pageY < CAN_H){
        
        addUnit(e.pageX, e.pageY);
    }
}

function moveUnits() {
    //TODO
}

function addUnit(x, y) {
    let unit;
    
    switch(selectedUnit){
        case Units.Heavy:
            unit = new BaseUnit(100, 30,  3, 7, 50, 2, 1);
            break;
        case Units.Basic:
            unit = new BaseUnit(30,  15,  6, 2, 40, 1, 2);
            break;
        case Units.Light:
            unit = new BaseUnit(20,  10, 10, 1, 30, 1, 5);
            break;
    }
    
    unit.x = x;
    unit.y = y;
    
    alliedUnits[alliedUnits.length] = unit;
}