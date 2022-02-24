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
    this.benefit = this.benefit + 1;
  }

  updateBenefitValue() {
    if (
        this.name === "Doliprane" || this.name === "Magic Pill"
      ) {
        if (this.benefit > 0) {
          if (this.name === "Doliprane") {
            this.decreaseBenefit();
          }
        }
      } else {
        if (this.benefit < 50) {
          this.increaseBenefit();
          if (this.name === "Fervex") {
            if (this.expiresIn < 11) {
              if (this.benefit < 50) {
                this.increaseBenefit();
              }
            }
            if (this.expiresIn < 6) {
              if (this.benefit < 50) {
                this.increaseBenefit();
              }
            }
          }
        }
      }
      if (this.name != "Magic Pill") {
        this.expiresIn = this.expiresIn - 1;
      }
      if (this.expiresIn < 0) {
        if (this.name === "Herbal Tea") {
          if (this.benefit < 50) {
            this.increaseBenefit();
          }
        } else {
          if (this.name === "Fervex") {
            this.benefit = this.benefit - this.benefit;
          } else {
            if (this.name === "Doliprane") {
              if (this.benefit > 0) {
                  this.decreaseBenefit();
                }
            }
          }
        }
      }

  }
}

export class Doliprane extends Drug {
  constructor() {
    super("Doliprane", 20, 30)
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
