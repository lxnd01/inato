import {Dafalgan} from "./pharmacy";


describe("dafalgan", () => {
  it("should degrades in benefit twice as fast as normal drugs", () => {
    // @reviewer : What is "normal" ? Do we really wants to compare to "normal" ? Can we say it degrades by 2 ?
    const drug = new Dafalgan(50, 10);
    drug.updateBenefitValue();
    expect(drug.benefit).toEqual(8)
  })
})
