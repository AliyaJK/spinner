const charArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let i = 0; i < charArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${charArray[i]}   `);
  }, 100 + (200 * i));
}