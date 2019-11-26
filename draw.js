function draw() {
    ctx.clearRect(0,0,CAN_W,CAN_H);
    //ctx.drawImage(background, 0,0,CAN_W,CAN_H);
    drawTerrain();
    drawUnits();
}

function drawTerrain() {
    ctx.fillStyle = 'white';
    for(let w in terrain){
        let wall = terrain[w];
        ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
    }
}

function drawUnits() {
    ctx.fillStyle = 'blue';
    for(let ally in alliedUnits){
        let unit = alliedUnits[ally];
        ctx.beginPath();
        ctx.arc(unit.x, unit.y, unit.size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = 'red';
    for(let enemy in enemyUnits){
        let unit = enemyUnits[enemy];
        ctx.beginPath();
        ctx.arc(unit.x, unit.y, unit.size, 0, Math.PI * 2);
        ctx.fill();
    }
}