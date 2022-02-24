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
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name === "Doliprane" || this.drugs[i].name === "Magic Pill"
      ) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name === "Doliprane") {
            this.drugs[i].decreaseBenefit();
          }
        }
      } else {
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].increaseBenefit();
          if (this.drugs[i].name == "Fervex") {
            if (this.drugs[i].expiresIn < 11) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].increaseBenefit();
              }
            }
            if (this.drugs[i].expiresIn < 6) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].increaseBenefit();
              }
            }
          }
        }
      }
      if (this.drugs[i].name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != "Herbal Tea") {
          if (this.drugs[i].name != "Fervex") {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].decreaseBenefit();
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].increaseBenefit();
          }
        }
      }
    }

    return this.drugs;
  }
}
