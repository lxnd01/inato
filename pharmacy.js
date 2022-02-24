export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefit() {
    let BENEFIT_MIN = 0;
    if (this.benefit > BENEFIT_MIN) {
      this.benefit = this.benefit - 1;
    }
  }

  increaseBenefit() {
    let BENEFIT_MAX = 50;
    if (this.benefit < BENEFIT_MAX) {
      this.benefit = this.benefit + 1;
    }
  }

  updateBenefitValue() {
      this.increaseBenefit();
      if (this.name === "Fervex") {
        if (this.expiresIn < 11) {
          this.increaseBenefit();
        }
        if (this.expiresIn < 6) {
          this.increaseBenefit();
        }
      }
      this.expiresIn = this.expiresIn - 1;
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
    this.decreaseBenefit();
    this.expiresIn = this.expiresIn - 1;
    if (this.expired()) {
      this.decreaseBenefit();
    }
  }
}

export class MagicPill extends Drug {
  constructor() {
    super("Magic Pill", 15, 40)
  }

  updateBenefitValue() {
    // the magic pill is immuable
  }
}

export class HerbalTea extends Drug {
  constructor() {
    super("Herbal Tea", 10, 5)
  }
}

export class Fervex extends Drug {
  constructor() {
    super("Fervex", 5, 40)
  }

  updateBenefitValue() {
    this.increaseBenefit();
    if (this.expiresIn < 11) {
      this.increaseBenefit();
    }
    if (this.expiresIn < 6) {
      this.increaseBenefit();
    }
    this.expiresIn = this.expiresIn - 1;
    if (this.expired()) {
      this.benefit = this.benefit - this.benefit;
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
