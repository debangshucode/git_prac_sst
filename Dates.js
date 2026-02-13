console.log( Date.parse( new Date())  );
console.log(  new Date().toDateString() );
console.log(  new Date().toUTCString() );
console.log( new Date().toISOString() );
console.log(new Date().getDay());

console.log(Temporal.Now.zonedDateTimeISO().second);
const myDate = Temporal.PlainDate.from('2024-06-01');

const newDate = myDate.subtract({ days: 10 });

console.log(newDate.toString()); // Output: 2024-05-22


const wedding = Temporal.PlainDate.from('2026-05-01');
const today = Temporal.Now.plainDateISO();

const duration = today.until(wedding);
console.log(duration.toString()); 

// Create a Temporal object
const date = Temporal.PlainDate.from("2026-05-01");

// Replace month and day
const customDate = date.with({ month:12, day:25 });
console.log(customDate.toString()); 