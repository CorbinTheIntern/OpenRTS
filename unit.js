var BaseUnit = function(cost, x, y, size, speed, health, range, attackSpeed) {
    this.cost = cost;
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.health = health;
    this.range = range;
    this.attackSpeed = attackSpeed;
    
    this.pathStart;
    this.pathEnd;
}


var Units = {
    // Cost, Size, Speed, Health, Range, Damage, Attack Speed
    'Heavy': 0,
    'Basic': 1,
    'Light': 2
};