//general purpose greeter
function greeter(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
let d = new Date()
greeter("You",  d);