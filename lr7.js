// Создание классов Student и Mark
class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.marks = [];
    }

    // Метод для вычисления средней оценки
    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return totalMarks / this.marks.length;
    }

    // Метод для получения всех оценок по переданному предмету
    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    // Метод для добавления оценки по предмету
    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    // Метод для удаления всех оценок по переданному предмету
    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}

// Функция для сортировки массива студентов по средней оценке с использованием сортировки Шелла
function shellSortStudentsByAverageMark(students) {
    const n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = students[i];
            let j = i;

            while (j >= gap && students[j - gap].getAverageMark() > temp.getAverageMark()) {
                students[j] = students[j - gap];
                j -= gap;
            }

            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return students;
}

// Пример использования
const students = [
    new Student('Иванов', 'Иван'),
    new Student('Петров', 'Петр'),
    new Student('Сидоров', 'Сидор')
];

students[0].addMark('Математика', 5);
students[0].addMark('Физика', 4);
students[1].addMark('Математика', 3);
students[1].addMark('Физика', 4);
students[2].addMark('Математика', 5);
students[2].addMark('Физика', 5);

console.log('До сортировки:');
students.forEach(student => console.log(`${student.lastName} ${student.firstName}: ${student.getAverageMark()}`));

shellSortStudentsByAverageMark(students);

console.log('После сортировки:');
students.forEach(student => console.log(`${student.lastName} ${student.firstName}: ${student.getAverageMark()}`));
