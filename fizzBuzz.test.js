const fizzBuzz = require('./fizzBuzz')
test ('x / 3 ลงตัวได้ Fizz', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
})

test('x / 1 ได้เลขปกติ', () => {
    expect(fizzBuzz(1)).toBe("1")
})

test('x / 5 ลงตัวได้ Buzz', () =>{
    expect(fizzBuzz(5)).toBe("Buzz")
})

test('x มีเลข 3 หลักสิบได้ Fizz', () =>{
    expect(fizzBuzz(31)).toBe("Fizz")
})

test('x มีเลข 5 หลักสิบได้ Bizz', () =>{
    expect(fizzBuzz(52)).toBe("Buzz")
})

test('x หารทั้ง 5 และ 3 ลง ตัว ได้ FizzBuzz', () =>{
    expect(fizzBuzz(15)).toBe("FizzBuzz")
    
})