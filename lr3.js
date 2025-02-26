class Mark {
    subject = "";
    mark = 3;
}

class Student {
    firstName = "";
    lastName = "";
    marks = [];

    meanMark() { return this.marks.map(mark => mark.mark).map((sum = 0, n => sum += n))[-1] }
    getMarksBySubject(subjectName) { }
    AddMark() { }
    DeleteMarksBySubject() { }
}