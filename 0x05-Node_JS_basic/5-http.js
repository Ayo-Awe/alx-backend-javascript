const { createServer } = require('http');
const fs = require('fs');

const app = createServer();
const db = process.argv[2];

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

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const file = fs.readFileSync(db);
      const students = parseCsv(file.toString());

      res.write(`Number of students: ${students.length}\n`);

      const studentsByField = groupStudentsByField(students);

      Object.entries(studentsByField).forEach(([field, students], i) => {
        const listOfFirstNames = students.map((s) => s.firstname).join(', ');
        if (i > 0) res.write('\n');
        res.write(
          `Number of students in ${field}: ${students.length}. List: ${listOfFirstNames}`,
        );
      });
    } catch (error) {
      res.write('Cannot load the database');
    }
  }

  res.end();
});

module.export = app;

app.listen(1245);
