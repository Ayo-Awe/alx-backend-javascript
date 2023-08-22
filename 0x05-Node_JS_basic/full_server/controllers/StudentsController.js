import { readDatabase } from "../utils";

function groupStudentsByField(students) {
  return students.reduce((acc, curr) => {
    if (!acc[curr.field]) {
      acc[curr.field] = [];
    }

    acc[curr.field].push(curr);

    return acc;
  }, {});
}

function sortByField([a], [b]) {
  return a.toLowerCase() - b.toLowerCase();
}

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const groupedStudents = groupStudentsByField(students);

      res.write("This is the list of our students\n");

      Object.entries(groupedStudents)
        .sort(sortByField)
        .forEach(([field, students], i) => {
          const listOfFirstNames = students.map((s) => s.firstname).join(", ");

          if (i > 0) {
            res.write("\n");
          }

          res.write(
            `Number of students in ${field}: ${students.length}. List: ${listOfFirstNames}`
          );
        });

      res.end();
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;

      if (!["CS", "SWE"].includes(major)) {
        return res.status(500).send("Major parameter must be CS or SWE");
      }

      const students = await readDatabase(process.argv[2]);
      const groupedStudents = groupStudentsByField(students);

      const listOfFirstNames = groupedStudents[major]
        .map((s) => s.firstname)
        .join(", ");

      res.write(`List: ${listOfFirstNames}`);

      res.end();
    } catch (error) {
      console.log(error);

      res.status(500).send("Cannot load the database");
    }
  }
}
