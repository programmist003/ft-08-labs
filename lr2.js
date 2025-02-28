// 1. Функция, которая принимает три числовых параметра и возвращает произведение двух максимальных из них
function productOfTwoMax(a, b, c) {
    const max1 = Math.max(a, b, c);
    let max2;
    if (max1 === a) {
        max2 = Math.max(b, c);
    } else if (max1 === b) {
        max2 = Math.max(a, c);
    } else {
        max2 = Math.max(a, b);
    }
    return max1 * max2;
}

// Пример использования функции productOfTwoMax
console.log(productOfTwoMax(3, 5, 2)); // Вывод: 15

// 2. Функция, которая принимает на вход два параметра: имя и звание. Значение звания по умолчанию «рядовой»
function greet(name, rank = 'рядовой') {
    console.log(`${rank} ${name}`);
}

// Пример использования функции greet с передачей 1 и 2 параметров
greet('Иван'); // Вывод: рядовой Иван
greet('Петр', 'капитан'); // Вывод: капитан Петр

// 3. Функция, которая принимает на вход функциональное выражение и набор параметров для его вызова
function invokeFunction(func, ...args) {
    return func(...args);
}

// Пример использования функции invokeFunction
const add = (a, b) => a + b;
console.log(invokeFunction(add, 3, 4)); // Вывод: 7

// 4. Функция, которая принимает на вход целые числа и возвращает стрелочное выражение возведения в квадрат или куб
function getPowerFunction(n) {
    if (n % 2 === 0) {
        return x => x ** 2;
    } else {
        return x => x ** 3;
    }
}

// Пример использования функции getPowerFunction
const square = getPowerFunction(4);
console.log(square(3)); // Вывод: 9

const cube = getPowerFunction(5);
console.log(cube(3)); // Вывод: 27

// 5. Рекурсивная функция для расчёта факториала числа n
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Пример использования функции factorial
console.log(factorial(5)); // Вывод: 120
