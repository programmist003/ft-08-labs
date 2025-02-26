// 1. Создание объекта в формате JSON и функция для вывода информации в консоль
const studentJSON = {
    lastName: "Иванов",
    firstName: "Иван",
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "Физика", mark: 4 },
        { subject: "Химия", mark: 3 }
    ]
};

function printStudentInfo(student) {
    console.log(`Студент: ${student.lastName} ${student.firstName}`);
    console.log("Оценки:");
    student.marks.forEach(mark => {
        console.log(`${mark.subject}: ${mark.mark}`);
    });
}

printStudentInfo(studentJSON);

// 2. Создание классов Student и Mark
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

    // 3. Метод для вычисления средней оценки
    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return totalMarks / this.marks.length;
    }

    // 4. Метод для получения всех оценок по переданному предмету
    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    // 5. Метод для добавления оценки по предмету
    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    // 6. Метод для удаления всех оценок по переданному предмету
    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}

// Пример использования классов
const student = new Student("Петров", "Петр");
student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Химия", 3);

console.log(`Средняя оценка: ${student.getAverageMark()}`);
console.log(`Оценки по Математике:`, student.getMarksBySubject("Математика"));

student.removeMarksBySubject("Математика");
console.log(`Оценки после удаления Математики:`, student.marks);