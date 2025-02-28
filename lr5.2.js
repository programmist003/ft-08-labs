function sumNegativeElementsByColumn(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const numColumns = matrix[0].length;
    const sums = new Array(numColumns).fill(0);

    for (let col = 0; col < numColumns; col++) {
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][col] < 0) {
                sums[col] += matrix[row][col];
            }
        }
    }

    return sums;
}

// Пример использования функции
const matrix = [
    [1.1, -2.2, 3.3],
    [-4.4, 5.5, -6.6],
    [7.7, -8.8, 9.9],
    [-10.1, 11.1, -12.2]
];

console.log(sumNegativeElementsByColumn(matrix)); // Вывод: [-14.5, -11, -18.8]