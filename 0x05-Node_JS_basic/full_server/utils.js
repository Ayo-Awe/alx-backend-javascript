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

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const students = parseCsv(data.toString());

      return resolve(students);
    });
  });
}
