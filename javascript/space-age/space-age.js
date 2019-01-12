//  - Earth: orbital period 365.25 Earth days, or 31557600 seconds
//  - Mercury: orbital period 0.2408467 Earth years
//  - Venus: orbital period 0.61519726 Earth years
//  - Mars: orbital period 1.8808158 Earth years

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYearAsSeconds = 31557600;
  }
  calculateAge(ratio) {
    return parseFloat(
      (this.seconds / (this.earthYearAsSeconds * ratio)).toFixed(2)
    );
  }
  onEarth() {
    return this.calculateAge(1);
  }
  onMercury() {
    return this.calculateAge(0.2408467);
  }
  onVenus() {
    return this.calculateAge(0.61519726);
  }
  onMars() {
    return this.calculateAge(1.8808158);
  }
  onJupiter() {
    return this.calculateAge(11.862615);
  }
  onSaturn() {
    return this.calculateAge(29.447498);
  }
  onUranus() {
    return this.calculateAge(84.016846);
  }
  onNeptune() {
    return this.calculateAge(164.79132);
  }
}
