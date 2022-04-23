// examples

// grade = 84 round to 85 (85 - 84 is < 3)
// grade = 29 do not round (result is less than 40)
// grade = 57 do not round (60 - 57 is 3 or higher)

const rounding = require("./index");

test('score of 84 should round to 85', () => {
    expect(rounding(84)).toBe(85);
})