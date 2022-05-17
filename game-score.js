export default class GemScore {
  constructor() {
    this.collectibles = [];
  }

  addCollectible(collectible) {
    this.collectibles.push(collectible);
  }

  getTotalScore() {
    return this.collectibles.reduce(
      (total, current) => total + current.getScore(),
      0
    );
  }
}
