function countEqualToPrevious(arr) {
    if (arr.length <= 1) {
        return 0;
    }

    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
    }
    return count;
}

// Пример использования функции
const array = [1.1, 2.2, 2.2, 3.3, 4.4, 4.4, 4.4, 5.5];
console.log(countEqualToPrevious(array)); // Вывод: 4