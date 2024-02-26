"use strict";
class Student {
    constructor(name, semester, course) {
        this.name = name;
        this.semester = semester;
        this.course = course;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSemester() {
        return this.semester;
    }
    setSemester(semester) {
        this.semester = semester;
    }
    getCourse() {
        return this.course;
    }
    setCourse(course) {
        this.course = course;
    }
}
let student = new Student("Mandi", 2, "Soci");
console.log(student);
class Planet {
}
Planet.theBorgLiveHere = true;
alert(Planet.theBorgLiveHere);
//# sourceMappingURL=app.js.map