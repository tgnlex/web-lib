//general purpose greeter
function greeter(name: string, date: Date) {
  console.log(`Hello ${name}, today is ${date.toDateString()}!`);
}
let date = new Date()
greeter("You",  date);
