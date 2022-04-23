const rounding = require("./index");

test('score of 84 should round up', () => {
    expect(rounding(84)).toBe(85);
});

test('score below 38 should not round', () => {
    expect(rounding(29)).toBe(29);
});

test('score of 57 should not round', () => {
    expect(rounding(57)).toBe(57);
});

test('score of 73 should round up', () => {
    expect(rounding(73)).toBe(75);
});

test('score of 67 should not round', () => {
    expect(rounding(67)).toBe(67);
});

test('score of 38 should round up', () => {
    expect(rounding(38)).toBe(40);
});

test('score of 33 should not round', () => {
    expect(rounding(33)).toBe(33);
});