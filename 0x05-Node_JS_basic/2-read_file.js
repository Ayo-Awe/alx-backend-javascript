const fs = require('fs');

function zip(array1, array2) {
  const pairs = [];

  const length = Math.min(array1.length, array2.length);

  for (let i = 0; i < length; i += 1) {
    const newPair = [array1[i], array2[i]];
    pairs.push(newPair);
  }

  return pairs;
}

function groupStudentsByField(students) {
  return students.reduce((acc, curr) => {
    if (!acc[curr.field]) {
      acc[curr.field] = [];
    }

    acc[curr.field].push(curr);

    return acc;
  }, {});
}

/**
 * Parses a csv to an array of objects
 * @param {String} csv Content of csv as a string
 */
function parseCsv(csv) {
  // split into multiple lines
  // loop over each line
  // split line by commas (delimiter)
  // if line no is 1 then set headers to line
  // else create new object where the header matches the line position

  const lines = csv.trim().split('\n');

  if (lines.length === 0) {
    return [];
  }

  const headers = lines[0].split(',');
  const rows = lines.slice(1);

  return rows.map((row) => {
    const values = row.split(',');
    const headerValuePairs = zip(headers, values);
    const rowAsObject = Object.fromEntries(headerValuePairs);
    return rowAsObject;
  });
}

function countStudents(path) {
  const pathExists = fs.existsSync(path);

  if (!pathExists) {
    throw Error('Cannot load the database');
  }

  const file = fs.readFileSync(path);
  const students = parseCsv(file.toString());

  console.log(`Number of students: ${students.length}`);

  const studentsByField = groupStudentsByField(students);

  Object.entries(studentsByField).forEach(([field, students]) => {
    const listOfFirstNames = students.map((s) => s.firstname).join(', ');
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${listOfFirstNames}`,
    );
  });
}

module.exports = countStudents;
