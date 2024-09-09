import Validator from "../Validator";

test('Латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)', () => {
    expect(Validator.validateUsername('super91_ninja-turtle')).toBe(true);
});

test('Более 3 цифр подряд', () => {
    expect(Validator.validateUsername('ninja1234turtle')).toBe(false);
});

test('Начинается или заканчивается на символы тире -, подчёркивания _ и цифры (0-9)', () => {
    expect(Validator.validateUsername('1ninja123turtle')).toBe(false);
    expect(Validator.validateUsername('-ninja124turtle')).toBe(false);
    expect(Validator.validateUsername('_ninja134turtle')).toBe(false);
    expect(Validator.validateUsername('ninja234turtle1')).toBe(false);
    expect(Validator.validateUsername('ninja123turtle-')).toBe(false);
    expect(Validator.validateUsername('ninja124turtle_')).toBe(false);
});