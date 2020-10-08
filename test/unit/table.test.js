const { expect } = require("chai");
const { createTable } = require("../../src/table");
const stripAnsi = require("strip-ansi");

describe("createTable", function () {
  it("should create a table of quotes", function () {
    const quoteData = [
      {
        symbol: "AAPL",
        previous: "$200.05",
        price: "$205.01",
        change: "$4.96",
        percentChange: "2.48%",
        increase: true,
      },
      {
        symbol: "AMZN",
        previous: "$3,028.14",
        price: "$3,011.83",
        change: "-$16.31",
        percentChange: "-0.54%",
        increase: false,
      },
    ];
    const table = stripAnsi(createTable(quoteData));
    expect(table).to
      .equal(`┌────────┬───────────┬───────────┬─────────┬────────┐
│ Symbol │  Previous │   Current │  Change │      % │
├────────┼───────────┼───────────┼─────────┼────────┤
│ AAPL   │   $200.05 │   $205.01 │   $4.96 │  2.48% │
├────────┼───────────┼───────────┼─────────┼────────┤
│ AMZN   │ $3,028.14 │ $3,011.83 │ -$16.31 │ -0.54% │
└────────┴───────────┴───────────┴─────────┴────────┘`);
  });
});
