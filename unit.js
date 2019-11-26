var BaseUnit = function(cost, size, speed, health, range, attackSpeed) {
    this.cost = cost;
    this.size = size;
    this.speed = speed;
    this.health = health;
    this.range = range;
    this.attackSpeed = attackSpeed;
    
    this.pathStart;
    this.pathEnd;
}


var Units = {
    //                   Cost, Size, Speed, Health, Range, Damage, AttackSpeed
    'Heavy': new BaseUnit(100, 10,  3, 7, 50, 2, 1),
    'Basic': new BaseUnit( 30,  5,  6, 2, 40, 1, 2),
    'Light': new BaseUnit( 20,  3, 10, 1, 30, 1, 5)
};