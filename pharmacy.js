export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefit() {
    this.benefit = this.benefit - 1;
  }

  increaseBenefit() {
    let BENEFIT_MAX = 50;
    if (this.benefit < BENEFIT_MAX) {
      this.benefit = this.benefit + 1;
    }
  }

  updateBenefitValue() {
    if (
        this.name === "Doliprane" || this.name === "Magic Pill"
      ) {

      } else {
        this.increaseBenefit();
        if (this.name === "Fervex") {
          if (this.expiresIn < 11) {
            this.increaseBenefit();
          }
          if (this.expiresIn < 6) {
            this.increaseBenefit();
          }
        }
      }
      if (this.name != "Magic Pill") {
        this.expiresIn = this.expiresIn - 1;
      }
      if (this.expired()) {
        if (this.name === "Herbal Tea") {
          this.increaseBenefit();
        } else {
          if (this.name === "Fervex") {
            this.benefit = this.benefit - this.benefit;
          }
        }
      }

  }

  expired() {
    return this.expiresIn < 0;
  }
}

export class Doliprane extends Drug {
  constructor() {
    super("Doliprane", 20, 30)
  }

  updateBenefitValue() {
    if (this.benefit > 0) {
        this.decreaseBenefit();
    }
    this.expiresIn = this.expiresIn - 1;
    if (this.expired()) {
        if (this.benefit > 0) {
            this.decreaseBenefit();
          }
      }
    }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue()
    }

    return this.drugs;
  }
}
