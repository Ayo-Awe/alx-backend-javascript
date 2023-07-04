export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList.filter(
    (student) => student.location === city,
  );

  return studentsInCity.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: grade.grade || 'N/A' };
  });
}
