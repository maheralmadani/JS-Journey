// The break Keyword
// 11 min

// Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. 
// But what if we meet our dream dog on day 65? 
// We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. 
// In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

// The break keyword allows programs to “break” out of the loop from within the loop’s block.

// Let’s check out the syntax of a break keyword:

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

// This is the output for the above code:

// Banana.
// Banana.
// Banana.
// Orange you glad I broke out the loop!

// break statements can be especially helpful when we’re looping through large data structures! With breaks, 
// we can add test conditions besides the stopping condition, and exit the loop when they’re met.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"]; // Notorious B.I.G. is the last item in the array

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  console.log("And if you don't know, now you know.")
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  } // Output: Lil' Kim, And if you don't know, now you know., 
  // Jay-Z, And if you don't know, now you know., Notorious B.I.G., And if you don't know, now you know.
} // The loop above will log the following to the console: Lil' Kim, 
// And if you don't know, now you know., Jay-Z, And if you don't know, now you know., Notorious B.I.G., And if you don't know, now you know.