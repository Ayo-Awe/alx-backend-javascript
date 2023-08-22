function printName() {
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      console.log(`Your name is: ${chunk.trim()}`);
    }
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

module.exports = printName;

printName();
