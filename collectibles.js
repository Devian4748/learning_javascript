export class Collectible {
  constructor(name, worth) {
    this.name = name;
    this.worth = worth;
    this.count = 0;
  }

  collect() {
    this.count += 1;
  }

  getScore() {
    return this.count * this.worth;
  }

  getCollectedMessage() {
    return `${this.count} ${this.name}s collected`;
  }
}

export class Coin extends Collectible {
  constructor() {
    super('coin', 10);
  }
}

export class Gem extends Collectible {
  constructor() {
    super('gem', 50);
  }
}
