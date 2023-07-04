export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map((list) => list.id);
}
