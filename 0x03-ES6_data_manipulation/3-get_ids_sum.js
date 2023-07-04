export default function getStudentIdsSum(studentList) {
  return studentList.reduce((acc, student) => acc + student.id, 0);
}
