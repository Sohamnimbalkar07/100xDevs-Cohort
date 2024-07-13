// const today = new Date();
// console.log(today);
// const beforeOneMonth = new Date(new Date().setDate(today.getDate() - 30));
// console.log(beforeOneMonth);
// const valentines = new Date("1995-02-14");
// const month = valentines.getMonth();
// const monthNames = ["January", "February", "March" /* , … */];

// console.log(monthNames[month]); // "February"

const date = new Date("2024-04-09");
console.log(date);
console.log(typeof date);

const d = new Date("2024-04-09");
d.setDate(d.getDate() + 10);
console.log(d , typeof d);