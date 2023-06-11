module.exports = class Monster {
    constructor({ monsterName = "Unknown", minimumLife
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife;
    })
}

updateLife = (lifeChangeAmount) => {
    this.currentLife += lifeChangeAmount;
    this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
    this.isAlive = this.currentLife >= this.minimumLife;
};
randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
    if minimumLifeDrain < maximumLifeDrain {
        const LifeDrain = getrandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
        console.log(`${this.monsterName} power drain randomly of ${lifeDrain}`);
        this.updateLife(-Lifedrain);
    };
};