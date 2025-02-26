// 1. Создание класса Figure с приватными свойствами x и y и методом square
class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    square() {
        return undefined;
    }
}

// 2. Создание класса Circle, наследующего класс Figure
class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    // Переопределение метода расчёта площади круга
    square() {
        return Math.PI * this.#r ** 2;
    }
}

// 3. Создание класса Rectangle, наследующего класс Figure
class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    // Переопределение метода расчёта площади прямоугольника
    square() {
        return this.#h * this.#w;
    }
}

// 4. Демонстрация работы с экземплярами дочерних классов
const circle = new Circle(0, 0, 5);
console.log(`Площадь круга: ${circle.square()}`); // Площадь круга: 78.53981633974483

const rectangle = new Rectangle(0, 0, 4, 6);
console.log(`Площадь прямоугольника: ${rectangle.square()}`); // Площадь прямоугольника: 24
