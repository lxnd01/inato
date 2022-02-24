export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    // this method may be declared absract with Typescript
    throw new Error('This method is abstract');
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

  decreaseExpirationTime() {
    this.expiresIn = this.expiresIn - 1;
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
    this.decreaseExpirationTime();
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
    // the magic pill is eternal
  }
}

export class HerbalTea extends Drug {
  constructor() {
    super("Herbal Tea", 10, 5)
  }

  updateBenefitValue() {
      this.increaseBenefit();
      this.decreaseExpirationTime();
      if (this.expired()) {
        this.increaseBenefit();
      }
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
    this.decreaseExpirationTime();
    if (this.expired()) {
      this.benefit = 0;
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
