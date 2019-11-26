var can, ctx;
var CAN_W = 500;
var CAN_H = 300;
var FPS = 60;

var alliedUnits = [];
var enemyUnits = [];
var selectedUnit = Units.Basic;
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
    
    document.addEventListener('mouseDown', onClick, false);
    setInterval(loop, 1000/FPS);
}

function loop () {
    moveUnits(); //TODO
    draw();
}

function onClick(e) {
    if(e.pageX < CAN_W && e.pageY < CAN_H){
        addUnit(selectedUnit, e.pageX, e.pageY);
    }
}

function moveUnits() {
    //TODO
}

function addUnit(type, x, y) {
    alliedUnits[alliedUnits.length] = selectedUnit;
}