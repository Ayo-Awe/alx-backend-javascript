function printName() {
  console.log("Welcome to Holberton School, what is your name?");

  process.stdin.setEncoding("utf8");
  process.stdin.on("readable", () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
      console.log(`Your name is: ${chunk.trim()}`);
    }
  });

  process.stdin.on("end", () => {
    console.log("This important software is now closing");
  });
}

module.exports = printName;

printName();
