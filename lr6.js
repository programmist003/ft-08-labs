// 1. Функция для поиска элементов, присутствующих в обоих массивах, используя Set
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const commonElements = new Set();

    for (const elem of set1) {
        if (set2.has(elem)) {
            commonElements.add(elem);
        }
    }

    return Array.from(commonElements);
}

// Пример использования функции findCommonElements
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); // Вывод: [4, 5]

// 2. Функция для подсчета количества вхождений каждого элемента в массиве, используя Map
function countElementOccurrences(arr) {
    const occurrences = new Map();

    for (const elem of arr) {
        occurrences.set(elem, (occurrences.get(elem) || 0) + 1);
    }

    return occurrences;
}

// Пример использования функции countElementOccurrences
const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countElementOccurrences(array)); // Вывод: Map(4) { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }

// 3. Подсчет числа обучающихся в самой большой группе
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function countStudentsInLargestGroup(students) {
    const groupCounts = new Map();

    for (const student of students) {
        groupCounts.set(student.group, (groupCounts.get(student.group) || 0) + 1);
    }

    let maxCount = 0;
    for (const count of groupCounts.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}

// Пример использования функции countStudentsInLargestGroup
const students = [
    new Student('Alice', 'Group1'),
    new Student('Bob', 'Group2'),
    new Student('Charlie', 'Group1'),
    new Student('David', 'Group3'),
    new Student('Eve', 'Group2'),
    new Student('Frank', 'Group2')
];

console.log(countStudentsInLargestGroup(students)); // Вывод: 3
