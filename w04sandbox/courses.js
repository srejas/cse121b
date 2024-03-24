const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    enrollStudent(sectionNum) {
        const matchingSection = section => section.sectionNum == sectionNum;
        const sectionIndex = this.sections.findIndex(matchingSection);

        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },

    dropStudent(sectionNum) {
        const matchingSection = section => section.sectionNum == sectionNum;
        const sectionIndex = this.sections.findIndex(matchingSection);

        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
};

function setCourseNameAndNumber(course) {
    const courseNameElement = document.querySelector('#courseName');
    const courseCodeElement = document.querySelector('#courseCode');
    courseNameElement.textContent = course.name;
    courseCodeElement.textContent = course.code;
}

function renderSections(sections) {
    const sectionsElement = document.querySelector('#sections');
    const sectionsTable = sections
    .map(section => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`)
    .join('');

    sectionsElement.innerHTML = sectionsTable;
}

document.querySelector('#enrollStudent').addEventListener('click', () => {
    aCourse.enrollStudent(document.querySelector('#sectionNumber').value);
});

document.querySelector('#dropStudent').addEventListener('click', () => {
    aCourse.dropStudent(document.querySelector('#sectionNumber').value);
});

setCourseNameAndNumber(aCourse);
renderSections(aCourse.sections);