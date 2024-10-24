import { expect } from "chai"
import add from "../src/add.js"

describe("Example test", () => {
  it("sum of positive (3) with positive (7), expecting positive (10)", () => {
    expect(add(3,7)).to.equal(10)
  });
})