import fs from "fs";
import {run} from "./scenario";


describe("golden-master", () => {
  it("should not change", () => {
    expect(run().toString()).toEqual(fs.readFileSync('output.golden-master').toString())
  })
})